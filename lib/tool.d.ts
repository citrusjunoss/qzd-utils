/**
 *@name 获取文件扩展名
 *@filename  文件名 需要带后缀
 *@description String.lastIndexOf() 方法返回指定值（本例中的'.'）在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。对于'filename'和'.hiddenfile'，lastIndexOf的返回值分别为0和-1无符号右移操作符(»>) 将-1转换为4294967295，将-2转换为4294967294，这个方法可以保证边缘情况时文件名不变。 String.prototype.slice() 从上面计算的索引处提取文件的扩展名。如果索引比文件名的长度大，结果为""。
 *
 */
export declare function getFileExtension(filename: string): string;
/**
 * @name 文件大小转换根据大小转换为不同的计量单位(换算比例1000)
 * @param num  文件大小 字节
 * @param digits 保留几位小数
 */
export declare function getfilesize(num: number, digits?: number): string;
/**
 *
 * @name 通过文件路径获取文件名字
 * @param path  文件路径
 * @param noExt 不包含扩展名
 */
export declare function getFileNameByPath(path: string, noExt?: boolean): string;
/**
 * @name 对象深拷贝
 * @param obj
 * @param hash 解决循环引用
 */
export declare function deepClone<T>(obj: any | any, hash?: WeakMap<object, any>): T | any;
/**
 * @name 生成唯一字符串(伪唯一)
 */
export declare function createUniqueString(): string;
/**
 * @name 浮点数加法
 * @param arg1
 * @param arg2
 */
export declare function accAdd(arg1: number, arg2: number): number;
/**
 * @name 浮点数减法
 * @param arg1
 * @param arg2
 */
export declare function accSubtr(arg1: number, arg2: number): number;
/**
 * @name 浮点数乘法
 * @param arg1
 * @param arg2
 */
export declare function accMul(arg1: number, arg2: number): number;
/**
 * @name 除法浮点运算
 * @param arg1
 * @param arg2
 */
export declare function accDiv(arg1: number, arg2: number): number;
/**
 * @数组转换为二维数组 [1, 2, 3, 4] => [[1,2], [3,4]]
 * @param arr
 * @param num
 */
export declare function sliceToArray(arr: any[], num: number): any[];
