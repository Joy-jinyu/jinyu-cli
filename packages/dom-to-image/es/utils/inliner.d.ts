export declare class Inliner {
    private static URL_REGEX;
    static shouldProcess(url: string): boolean;
    static readUrls(url: string): string[];
    static inlineAll(link: string, baseUrl?: string): Promise<string>;
    static inline(link: string, url: string, baseUrl: string): Promise<string>;
}
