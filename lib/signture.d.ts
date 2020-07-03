/**
 * 格式化请求参数，取所有的value值，并储存到数组arr中
 * @param {Object} data
 * @param {Array} arr
 */
export declare function formatObject2values(data?: any, arr?: string[]): any[];
export declare function shaEncryption(data: {
    [props: string]: any;
}, paramSig: string): string;
