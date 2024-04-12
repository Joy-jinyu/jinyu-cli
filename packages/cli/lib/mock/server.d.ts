import { Express } from 'express';
import { ViteDevServer } from 'vite';
export declare function createServer(root?: string, isProd?: boolean, hmrPort?: undefined): Promise<{
    app: Express;
    vite: ViteDevServer | undefined;
}>;
