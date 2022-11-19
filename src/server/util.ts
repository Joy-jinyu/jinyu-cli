
import glob from 'glob';
import path from 'path';
import fs from 'fs';
import Router from 'koa-router';
import { IRegistryRoute } from './type';
import { OvoRequest } from '../shared/types/request';
import { createServer as createViteServer, ViteDevServer } from 'vite';
import { SERVER_HTML_ERROR } from './const';
import SingleAxios from '../shared/packages/request';


const resolve = (p: string) => path.resolve(__dirname, '../../', p);

export const registryDevRoute = async ({
    isMock, baseUrl
}: {
    isMock: boolean,
    baseUrl: string
}): Promise<{
    vite: ViteDevServer,
    router: Router
}> => {
    const vite: ViteDevServer = await createViteServer({
        server: { middlewareMode: 'ssr' }
    });
    const router = new Router();
    isMock ? useMockRouterInterceptor({
        router
    }) : useRemoteRouterInterceptor({
        router, baseUrl
    })

    router.get('(.*)', async (ctx, next) => {
        const { req } = ctx;
        const { url } = req;
        if (!url || !/^\/api/.test(url || '')) {
            await next();
        }
        try {
            let template = fs.readFileSync(
                resolve('index.html'),
                'utf-8'
            );
            template = await vite.transformIndexHtml(url || '', template);
            const render = (await vite.ssrLoadModule(resolve('src/entry-server.tsx')))
                .render;

            // 6. 返回渲染后的 HTML。
            ctx.body = await drawHtml({ url, render, template });

            ctx.status = 200;
        } catch (e: any) {
            vite.ssrFixStacktrace(e);
            ctx.app.emit('error', new Error(SERVER_HTML_ERROR), ctx, e);
        }
    });

    return { vite, router }
}

export const registryBuildRoute = async ({
    baseUrl
}: IRegistryRoute): Promise<Router> => {
    const router = new Router();

    useRemoteRouterInterceptor({ router, baseUrl })

    router.get('(.*)', async (ctx, next) => {
        const { req } = ctx;
        const { url } = req;
        if (!url || !/^\/api/.test(url || '')) {
            await next();
        }
        try {
            const template = fs.readFileSync(
                resolve('dist/client/index.html'),
                'utf-8'
            );

            const render = (await import(resolve('dist/server/entry-server.js')))
                .render;
            ctx.body = await drawHtml({ url, render, template });
            ctx.status = 200;
        } catch (e: any) {
            ctx.app.emit('error', new Error(SERVER_HTML_ERROR), ctx, e);
        }
    });

    return router
}

const useMockRouterInterceptor = ({ router }: {
    router: Router,
}) => {
    // 注册路由
    glob.sync(path.resolve('./mock', '**/*.json')).forEach((item, i) => {
        const apiJsonPath = item && item.split('/mock')[1];
        const apiPath = apiJsonPath.replace('.json', '');
        console.log(apiPath, '/api' + apiPath)
        router.all('/api' + apiPath, async ctx => {

            try {
                const jsonStr = fs.readFileSync(item).toString();
                ctx.body = jsonStr;
            } catch (err) {
                ctx.body = {
                    status: 404,
                    type: 'false'
                };
                ctx.throw('服务器错误: ', 500);
            }
        });
    });
}

const useRemoteRouterInterceptor = ({ router, baseUrl }: {
    router: Router,
    baseUrl: string
}) => {

    const request = SingleAxios.getInstance({
        baseURL: baseUrl,
        timeout: 10000
    })
    // 注册路由
    glob.sync(path.resolve('./mock', '**/*.json')).forEach((item, i) => {
        const apiJsonPath = item && item.split('/mock')[1];
        const apiPath = apiJsonPath.replace('.json', '');
        router.all('/api' + apiPath, async ctx => {
            try {
                const method =
                    ctx.request.method.toLowerCase() as OvoRequest.Method;
                const params = ctx.request.body;
                const data = await request[method](
                    apiPath,
                    params,
                    {
                        headers: {
                            isOrigin: true
                        }
                    }
                )
                    .then((res) => {
                        const result = res?.data;
                        if (res && res.status === 200) {
                            if (!result) {
                                res.data = {};
                            }
                            for (const key in res.headers) {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                ctx.set(key, res.headers[key]);
                            }
                            return res.data;
                        } else {
                            return Promise.reject({
                                message: result?.message,
                                data: res?.data,
                                status: res.status
                            })
                        }
                    })
                    .catch((e: any) => {
                        return e;
                    });
                ctx.body = data;
            } catch (err) {
                ctx.body = {
                    status: 404,
                    type: 'false'
                };
                ctx.throw('服务器错误: ', 500);
            }
        });
    });
}

// 6. 返回渲染后的 HTML。
const drawHtml = async ({ url, render, template }: {
    url: string | undefined, render: any, template: string
}) => {
    const context: { preloadedState?: string } = {};
    const appHtml = await render(url, context);
    let html = template;

    if (context.preloadedState) {
        html = html.replace(
            `//--script-paclcehoder--//`,
            `window.PRE_LOADED_STATE = ${JSON.stringify(
                context.preloadedState
            )};window.DEV_ENV='${process.env.NODE_ENV}'`
        );
    }

    return html.replace(`<!--ssr-->`, appHtml);
}