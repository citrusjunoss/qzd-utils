// 检测是否连续
export function isConsecutive(str: string, isReverse: boolean = true) {
  const arr = str.split('');
  let flag = true;
  for (var i = 1; i < arr.length - 1; i++) {
    var firstIndex = arr[i - 1].charCodeAt(0);
    var secondIndex = arr[i].charCodeAt(0);
    var thirdIndex = arr[i + 1].charCodeAt(0);
    thirdIndex - secondIndex == 1;
    secondIndex - firstIndex == 1;
    if (
      (thirdIndex - secondIndex == 1 && secondIndex - firstIndex == 1) ||
      (thirdIndex - secondIndex == -1 && secondIndex - firstIndex == -1)
    ) {
      flag = false;
    }
  }
  if (!flag) {
    return flag;
  }
  return flag;
}
