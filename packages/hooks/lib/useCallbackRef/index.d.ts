/**
 * 保证callback内的引用一直存在
 */
export declare const useCallbackRef: <T extends (...args: any[]) => unknown>(fn: T | undefined) => T;
