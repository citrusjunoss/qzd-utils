import { accDiv } from './utils';

/**
 *@name 获取文件扩展名
 *@filename  文件名 需要带后缀
 *@description String.lastIndexOf() 方法返回指定值（本例中的'.'）在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。对于'filename'和'.hiddenfile'，lastIndexOf的返回值分别为0和-1无符号右移操作符(»>) 将-1转换为4294967295，将-2转换为4294967294，这个方法可以保证边缘情况时文件名不变。 String.prototype.slice() 从上面计算的索引处提取文件的扩展名。如果索引比文件名的长度大，结果为""。
 *
 */
export function getFileExtension(filename: string): string {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
}

/**
 * @name 文件大小转换根据大小转换为不同的计量单位
 * @param size
 */
export function getfilesize(size: number): string {
  if (!size) return '';
  const num = 1024.0; //byte
  if (size < num) return size + 'B';
  if (size < Math.pow(num, 2)) return accDiv(size, num).toFixed(2) + 'KB'; //kb
  if (size < Math.pow(num, 3))
    return accDiv(size, Math.pow(num, 2)).toFixed(2) + 'M'; //M
  if (size < Math.pow(num, 4))
    return accDiv(size, Math.pow(num, 3)).toFixed(2) + 'G'; //Gobjobj
  return accDiv(size, Math.pow(num, 4)).toFixed(2) + 'T'; //T
}

/**
 *
 * @name 通过文件路径获取文件名字
 * @param path  文件路径
 * @param noExt 不包含扩展名
 */
export function getFileNameByPath(path: string, noExt?: boolean): string {
  const fullName = path.split('/').pop();
  if (!fullName) return '';
  return noExt ? fullName.slice(0, fullName.lastIndexOf('.')) : fullName;
}

/**
 * @name 对象
 * @param obj
 * @param hash 解决循环引用
 */
export function deepClone(obj: any, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== 'object') return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  const cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
