import { isEmpty } from './validate';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function filterParams(params: any) {
  const res = {};
  if (!isTypes(params, ['Object', 'Array'])) return params;
  Object.keys(params).forEach((k: string) => {
    if (isTypes(params[k], 'Array')) {
      (res as any)[k] = params[k].map((item: any) => filterParams(item));
    } else if (isTypes(params[k], 'Object')) {
      (res as any)[k] = filterParams(params[k]);
    } else if (!isEmpty(params[k])) {
      (res as any)[k] = params[k];
    }
  });
  return res;
}

/**
 * @description 查询数据是否是属于某种类型 或者 某几种类型中的 1 个
 * @param params 数据
 * @param types string | string [] eg: 'null' or ['null']
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isTypes(params: any, types: string | string[]) {
  const dataList = [
    'function',
    'array',
    'object',
    'number',
    'date',
    'string',
    'boolean',
    'symbol',
    'null',
    'undefined',
  ];
  // 数组item
  if (Object.prototype.toString.call(types) === '[object Array]') {
    return (types as string[]).some((item) => isType(params, item));
  } else if (Object.prototype.toString.call(types) === '[object String]') {
    return isType(params, types as string);
  }

  function isType(params: any, type: string) {
    if (!dataList.includes(type.toLowerCase())) {
      console.error(`type ${type} is not defined`);
      return false;
    }
    return (
      Object.prototype.toString.call(params).toLowerCase() ===
      `[object ${type}]`.toLowerCase()
    );
  }
}

function decode(s: string) {
  return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
}

export function parseCookies(
  key: string,
  json?: boolean,
  customCookies?: string,
  standard?: boolean,
): string | undefined {
  if (typeof document === 'undefined' && customCookies) {
    return;
  }
  const cookiesSplite = standard ? '; ' : ';';
  const cookiesStr = customCookies ? customCookies : document.cookie;
  const cookies = cookiesStr ? cookiesStr.split(cookiesSplite) : [];
  const jar: any = {};

  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split('=');
    let cookie = parts.slice(1).join('=');

    if (!json && cookie.charAt(0) === '"') {
      cookie = cookie.slice(1, -1);
    }

    try {
      const name = decode(parts[0]);
      cookie = decode(cookie);

      if (json) {
        try {
          cookie = JSON.parse(cookie);
        } catch (e) {
          console.error(e);
        }
      }

      jar[name] = cookie;

      if (key === name) {
        break;
      }
    } catch (e) {
      console.error(e);
    }
  }
  return key ? jar[key] : jar;
}
