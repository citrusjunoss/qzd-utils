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
