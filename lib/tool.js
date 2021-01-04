"use strict";
exports.__esModule = true;
exports.sliceToArray = exports.accDiv = exports.accMul = exports.accSubtr = exports.accAdd = exports.createUniqueString = exports.deepClone = exports.getFileNameByPath = exports.getfilesize = exports.getFileExtension = void 0;
/**
 *@name 获取文件扩展名
 *@filename  文件名 需要带后缀
 *@description String.lastIndexOf() 方法返回指定值（本例中的'.'）在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。对于'filename'和'.hiddenfile'，lastIndexOf的返回值分别为0和-1无符号右移操作符(»>) 将-1转换为4294967295，将-2转换为4294967294，这个方法可以保证边缘情况时文件名不变。 String.prototype.slice() 从上面计算的索引处提取文件的扩展名。如果索引比文件名的长度大，结果为""。
 *
 */
function getFileExtension(filename) {
    return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
}
exports.getFileExtension = getFileExtension;
/**
 * @name 文件大小转换根据大小转换为不同的计量单位(换算比例1000)
 * @param num  文件大小 字节
 * @param digits 保留几位小数
 */
function getfilesize(num, digits) {
    if (!num)
        return '';
    var count = digits || 2;
    var si = [
        { value: Math.pow(1024, 6), symbol: 'E' },
        { value: Math.pow(1024, 5), symbol: 'P' },
        { value: Math.pow(1024, 4), symbol: 'T' },
        { value: Math.pow(1024, 3), symbol: 'G' },
        { value: Math.pow(1024, 2), symbol: 'M' },
        { value: 1024, symbol: 'k' },
        { value: 0, symbol: 'B' },
    ];
    for (var i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
            var size = si[i].value ? num / si[i].value : num;
            var upSize = size - Math.floor(size) < Math.pow(10, -count) && size - Math.floor(size) > 0
                ? size + Math.pow(10, -count)
                : size;
            return upSize.toFixed(count) + si[i].symbol;
        }
    }
    return num.toString();
}
exports.getfilesize = getfilesize;
/**
 *
 * @name 通过文件路径获取文件名字
 * @param path  文件路径
 * @param noExt 不包含扩展名
 */
function getFileNameByPath(path, noExt) {
    var fullName = path.split('/').pop();
    if (!fullName)
        return '';
    return noExt ? fullName.slice(0, fullName.lastIndexOf('.')) : fullName;
}
exports.getFileNameByPath = getFileNameByPath;
/**
 * @name 对象深拷贝
 * @param obj
 * @param hash 解决循环引用
 */
function deepClone(obj, hash) {
    if (hash === void 0) { hash = new WeakMap(); }
    if (obj === null)
        return obj; // 如果是null或者undefined我就不进行拷贝操作
    if (obj instanceof Date)
        return new Date(obj);
    if (obj instanceof RegExp)
        return new RegExp(obj);
    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (typeof obj !== 'object')
        return obj;
    // 是对象的话就要进行深拷贝
    if (hash.get(obj))
        return hash.get(obj);
    var cloneObj = new obj.constructor();
    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    hash.set(obj, cloneObj);
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}
exports.deepClone = deepClone;
/**
 * @name 生成唯一字符串(伪唯一)
 */
function createUniqueString() {
    var timestamp = +new Date() + '';
    var randomNum = parseInt("" + (1 + Math.random()) * 65536) + '';
    return (+(randomNum + timestamp)).toString(32);
}
exports.createUniqueString = createUniqueString;
/**
 * @name 浮点数加法
 * @param arg1
 * @param arg2
 */
function accAdd(arg1, arg2) {
    var r1, r2;
    try {
        r1 = arg1.toString().split('.')[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    var c = Math.abs(r1 - r2);
    var m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace('.', ''));
            arg2 = Number(arg2.toString().replace('.', '')) * cm;
        }
        else {
            arg1 = Number(arg1.toString().replace('.', '')) * cm;
            arg2 = Number(arg2.toString().replace('.', ''));
        }
    }
    else {
        arg1 = Number(arg1.toString().replace('.', ''));
        arg2 = Number(arg2.toString().replace('.', ''));
    }
    return (arg1 + arg2) / m;
}
exports.accAdd = accAdd;
/**
 * @name 浮点数减法
 * @param arg1
 * @param arg2
 */
function accSubtr(arg1, arg2) {
    var r1, r2;
    try {
        r1 = arg1.toString().split('.')[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    var m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    var n = r1 >= r2 ? r1 : r2;
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}
exports.accSubtr = accSubtr;
/**
 * @name 浮点数乘法
 * @param arg1
 * @param arg2
 */
function accMul(arg1, arg2) {
    var m = 0;
    var s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    }
    catch (e) {
        console.error('accMul Error: ', e);
    }
    try {
        m += s2.split('.')[1].length;
    }
    catch (e) {
        console.error('accMul Error: ', e);
    }
    return ((Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
        Math.pow(10, m));
}
exports.accMul = accMul;
/**
 * @name 除法浮点运算
 * @param arg1
 * @param arg2
 */
function accDiv(arg1, arg2) {
    var t1 = 0, t2 = 0;
    try {
        var a = arg1.toString().split('.');
        t1 = a.length > 1 ? a[1].length : 0;
    }
    catch (e) {
        throw new Error(e);
    }
    try {
        var a = arg2.toString().split('.');
        t2 = a.length > 1 ? a[1].length : 0;
    }
    catch (e) {
        throw new Error(e);
    }
    var r1 = Number(arg1.toString().replace('.', ''));
    var r2 = Number(arg2.toString().replace('.', ''));
    return (r1 / r2) * Math.pow(10, t2 - t1);
}
exports.accDiv = accDiv;
/**
 * @数组转换为二维数组 [1, 2, 3, 4] => [[1,2], [3,4]]
 * @param arr
 * @param num
 */
function sliceToArray(arr, num) {
    var res = [];
    var len = arr.length;
    // eslint-disable-next-line no-plusplus
    for (var index = 0; index < len; index++) {
        if (index % num === 0) {
            res.push(arr.slice(index, index + num));
        }
    }
    return res;
}
exports.sliceToArray = sliceToArray;
