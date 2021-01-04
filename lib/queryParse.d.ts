export declare function filterParams(params: any): any;
/**
 * @description 查询数据是否是属于某种类型 或者 某几种类型中的 1 个
 * @param params 数据
 * @param types string | string [] eg: 'null' or ['null']
 */
export declare function isTypes(params: any, types: string | string[]): boolean | undefined;
/**
 * @name  解析cookie
 * @param key
 * @param json
 * @param customCookies
 * @param standard
 */
export declare function parseCookies(key: string, customCookies?: string, standard?: boolean): string | undefined;
