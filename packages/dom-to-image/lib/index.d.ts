export declare class DomToImage {
    private options;
    constructor(options?: any);
    toPng(node: HTMLElement, options?: any): Promise<string>;
    private draw;
    toSvg(node: HTMLElement, options?: any): Promise<string | undefined>;
    private newCanvas;
}
