import { Express } from 'express';
import { ViteDevServer } from 'vite';
export declare function createServer({ apiTarget, staticTarget, root, }?: {
    apiTarget?: string | undefined;
    staticTarget?: string | undefined;
    root?: string | undefined;
}): Promise<{
    app: Express;
    vite: ViteDevServer | undefined;
}>;
