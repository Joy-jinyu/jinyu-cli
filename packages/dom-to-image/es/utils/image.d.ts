export declare class Images {
    constructor();
    inlineAll(node: HTMLElement | ChildNode): Promise<any>;
    private newImage;
    private inlineBackground;
}
export declare const inlineImages: (node: HTMLElement | undefined) => Promise<HTMLElement | undefined>;
