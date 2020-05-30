/**
 *
 * @param str           需要检测的字符串
 * @param isReverse     是否反序检测
 */
export function isConsecutive(str: string, isReverse = true): boolean {
  const arr = str.split('');
  let flag = true;
  for (let i = 1; i < arr.length - 1; i++) {
    const firstIndex = arr[i - 1].charCodeAt(0);
    const secondIndex = arr[i].charCodeAt(0);
    const thirdIndex = arr[i + 1].charCodeAt(0);
    if (
      (thirdIndex - secondIndex == 1 && secondIndex - firstIndex == 1) ||
      (isReverse &&
        thirdIndex - secondIndex == -1 &&
        secondIndex - firstIndex == -1)
    ) {
      flag = false;
    }
  }
  if (!flag) {
    return flag;
  }
  return flag;
}

export function accDiv(arg1: number, arg2: number): number {
  let t1 = 0,
    t2 = 0;
  try {
    t1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    throw new Error(e);
  }

  try {
    t2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    throw new Error(e);
  }

  const r1 = Number(arg1.toString().replace('.', ''));
  const r2 = Number(arg2.toString().replace('.', ''));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
