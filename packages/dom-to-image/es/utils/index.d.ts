/** 请求资源的类型 */
export declare const parseExtension: (url: string) => string;
/** 请求资源的请求头 */
export declare const mimeType: (url: string) => string;
/** 请求资源包含 data: */
export declare const isDataUrl: (url: string) => boolean;
export declare const toBlob: (canvas: HTMLCanvasElement) => Promise<unknown>;
export declare const canvasToBlob: (canvas: HTMLCanvasElement) => Promise<unknown>;
export declare const resolveUrl: (url: string, baseUrl: string) => string;
export declare const uid: () => string;
export declare const makeImage: (uri: string | undefined) => Promise<HTMLImageElement | undefined>;
export declare const getAndEncode: (url: string, { cacheBust, imagePlaceholder }?: {
    cacheBust?: boolean | undefined;
    imagePlaceholder?: string | undefined;
}) => Promise<string>;
export declare const dataAsUrl: (content: string, type: string) => string;
export declare const escape: (string: string) => string;
export declare const delay: (ms: number) => (arg: any) => Promise<unknown>;
export declare const asArray: <T extends NodeList | CSSStyleDeclaration | StyleSheetList | CSSRuleList, U>(arrayLike: T) => U[];
export declare const escapeXhtml: (string: string) => string;
export declare const nodeWidth: (node: HTMLElement) => number;
export declare const nodeHeight: (node: HTMLElement) => number;
export declare const px: (node: HTMLElement, styleProperty: string) => number;
