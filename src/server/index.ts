import path from 'path';
import Koa from 'koa';
import koaBody from 'koa-body';
import koaConnect from 'koa-connect';
import colors from 'colors';
import Router from 'koa-router';
import cors from '@koa/cors';

import ovoConfig from '../../ovo.config'
import { defaultServerOption, SERVER_HTML_ERROR } from './const';
import { Environment } from './enum';
import { registryBuildRoute, registryDevRoute } from './util';

const { hostname, port: SERVER_PORT } = ovoConfig.server || defaultServerOption
// "server": "yarn build && cross-env NODE_ENV=production ts-node server.ts",
const API_HOST = {
    //测试环境
    [Environment.DEV]: `http://${hostname}:8080`,
    // 后端开发本地
    // dev: 'http://192.168.1.93:8080',
    [Environment.UAT]: 'http://192.168.0.198:8080',
    [Environment.PROD]: 'http://192.168.1.93:8080'
};

const router = new Router();

const NODE_ENV = process.env.NODE_ENV as Environment
const IS_DEV: boolean = NODE_ENV === Environment.DEV;
const baseUrl = API_HOST[NODE_ENV]

async function createAppServer() {
    const resolve = (p: string) => path.resolve(__dirname, '../../', p);
    const app = new Koa();
    app.use(cors());
    app.use(
        koaBody({
            multipart: true
        })
    );
    //启动服务
    if (IS_DEV) {
        const { vite, router } = await registryDevRoute({ isMock: true, baseUrl })
        app.use(koaConnect(vite.middlewares));
        app.use(router.routes());
    } else {
        app.use((await import('koa-compress')).default());

        app.use(
            (await import('koa-static')).default(resolve('dist/client'), {
                index: false
            })
        );
        const router = await registryBuildRoute({ baseUrl })
        app.use(router.routes());
    }

    app.use(router.routes());

    app.on('error', (err, ctx, e) => {
        if (err.message === SERVER_HTML_ERROR) {
            //打印错误
            const msg = `[返回HTML页面异常]: ${e.stack}`;
            console.error(colors.red(msg));
            ctx.status = 500;
            ctx.body = msg;
        } else {
            const msg = `[服务器异常]: ${e}`;
            console.error(colors.red(msg));
            ctx.status = 500;
            ctx.body = msg;
        }
    });

    app.listen(SERVER_PORT, () => {
        const url = `http://localhost:${SERVER_PORT}`;
        console.log(
            colors.green('[React SSR]启动成功, 地址为:'),
            colors.green.underline(url)
        );
        // child_process.exec(`open ${url}`);
    });
}

createAppServer();
