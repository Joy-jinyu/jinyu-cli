import { Express } from 'express';
import { ViteDevServer } from 'vite';
export declare function createServer(root?: string): Promise<{
    app: Express;
    vite: ViteDevServer | undefined;
}>;
