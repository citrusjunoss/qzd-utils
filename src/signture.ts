import MD5 from 'js-md5';
import SHA1 from 'js-sha1';

/**
 * 格式化请求参数，取所有的value值，并储存到数组arr中
 * @param {Object} data
 * @param {Array} arr
 */
export function formatObject2values(data: any = {}, arr: string[] = []): any[] {
  Object.keys(data).forEach((key) => {
    if (
      Object.prototype.toString.call(data[key]) === '[object Array]' ||
      Object.prototype.toString.call(data[key]) === '[object Object]'
    ) {
      formatObject2values(data[key], arr);
    } else {
      if (data[key] || data[key] === 0 || data[key] + '' === 'false')
        arr.push(data[key]);
    }
  });
  return arr;
}

export function shaEncryption(
  data: { [props: string]: any },
  paramSig: string,
): string {
  const unique = formatObject2values(data);
  const x = [...(unique as any)];
  const sort = x.sort().join('');
  if (paramSig) {
    return MD5(SHA1(MD5(sort)) + paramSig);
  }
  return SHA1(MD5(sort));
}
