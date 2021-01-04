interface debounceOpt {
    leading?: boolean;
    maxWait?: number;
    trailing?: boolean;
}
export declare function debounce(func: (...args: any) => any, wait: number, option?: debounceOpt): () => any;
interface throttleOpt {
    leading?: boolean;
    trailing?: boolean;
}
export declare function throttle(func: (...args: any) => any, wait: number, option?: throttleOpt): () => any;
export {};
