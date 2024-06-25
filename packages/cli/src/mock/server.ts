// @ts-check
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express, { Express } from 'express'
import { ViteDevServer } from 'vite'
import { getMockData } from '@ovometajs/utils'
import { createProxyMiddleware } from 'http-proxy-middleware'

interface MockData {
  apiPath: string;
  jsonStr: string;
}

export async function createServer(
  {
    apiTarget = '',
    staticTarget = '',
    root = process.cwd(),
  } = {}
): Promise<{
  app: Express
  vite: ViteDevServer | undefined
}> {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const resolve = (p: string) => path.resolve(__dirname, p)

  const app = express()

  // 配置代理中间件
  const apiProxy = createProxyMiddleware({
    target: apiTarget, // 目标服务器地址
    changeOrigin: true, // 改变请求源头，对于跨域请求很有用
    pathRewrite: { '^/api': '' }, // 重写请求路径，去掉 '/api' 前缀
  });

    // 如果需要代理静态资源，比如图片、CSS等，也可以类似配置
  const staticProxy = createProxyMiddleware({
    target: staticTarget, // 静态资源服务器地址
    changeOrigin: true,
  });

  /**
   * @type {import('vite').ViteDevServer}
   */
  const vite: ViteDevServer = await (
    await import('vite')
  ).createServer({
    base: '/mock/',
    root,
    logLevel: 'info',
    server: {
      middlewareMode: true,
      watch: {
        // During tests we edit the files too fast and sometimes chokidar
        // misses change events, so enforce polling for consistency
        usePolling: true,
        interval: 100
      },
      hmr: {
        // port: hmrPort
      }
    },
    appType: 'custom'
  })
  // use vite's connect instance as middleware
  app.use(vite.middlewares)

  app.use('*', async (req, res, next) => {
    try {
      const url = req.originalUrl


      if (url && /^\/api/.test(url || '')) {
        next()
        return
      }

      let template
      // always read fresh template in dev
      template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      const render = (await vite.ssrLoadModule('/src/entry-server.js')).render
      const manifest = JSON.parse(
        fs.readFileSync(resolve('dist/client/ssr-manifest.json'), 'utf-8')
      )

      const [appHtml, preloadLinks] = await render(url, manifest)

      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
        .replace(`<!--app-html-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e: unknown) {
      if (e instanceof Error) {
        vite && vite.ssrFixStacktrace(e)
        console.log(e.stack)
        res.status(500).end(e.stack)
      }
    }
  })

  const mockData = getMockData('mock')

  mockData.forEach((data: MockData) => {
    app.use(`/api${data.apiPath}`, (req, res) => {
      res.status(200).json(data.jsonStr)
    })
  })
  // 使用中间件
  app.use('/api', apiProxy);
  app.use('/static', staticProxy);


  return { app, vite }
}
