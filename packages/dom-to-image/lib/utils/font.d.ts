export declare class FontFaces {
    constructor();
    resolveAll(): Promise<string>;
    private readAll;
    private getCssRules;
    private selectWebFontRules;
    private newWebFont;
}
export declare const embedFonts: (node: HTMLElement | undefined) => Promise<HTMLElement> | undefined;
