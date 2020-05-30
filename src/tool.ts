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
    return accDiv(size, Math.pow(num, 3)).toFixed(2) + 'G'; //G
  return accDiv(size, Math.pow(num, 4)).toFixed(2) + 'T'; //T
}
