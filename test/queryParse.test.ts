import { isTypes, filterParams, parseCookies } from '../src/queryParse';

describe('queryParse.test isTypes', () => {
  test('isTypes test pass', () => {
    expect(isTypes('12131212', 'string')).toBe(true);
  });
  test('vailPassword test not pass', () => {
    expect(isTypes('121312sdf12', 'number')).toBe(false);
  });
});

describe('queryParse.test filterParams', () => {
  test('isTypes test pass', () => {
    expect(
      filterParams({
        a: 1,
        b: 0,
        c: false,
        d: null,
        e: void 0,
        f: '',
        h: { a: [{ b: 0, c: null }] },
      }),
    ).toEqual({ a: 1, b: 0, c: false, h: { a: [{ b: 0 }] } });
  });
});

describe('queryParse.test cookies', () => {
  test('cookies test pass', () => {
    expect(
      parseCookies(
        'sso-token',
        'sso-token=eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi51T043OUEwLWZwM0xoS3lTU0NzUGxnLkI2akVpZXlJQkpYZmxqa1prZlFhQm1DVzJJZGRnaTBJZ013TmR5QzFQbzFzY0dDWGVNN0c4QkJVOFRMRW1KaEpUSGk1bDkxcnMxcTJwWFZINDFMUHRFMFE1Z3lGTDBzazVDeTE0US1zUnIxdTVhU1U5VzVYeGM0RV9uTXN4bjkyR0pJTGVwTW5lekRDNlZidWtDZFJXdVVjdk85dkFrT09FMGF4SkhSZUJ6cHp4amFzSDlLX0tRQWRDdF9MbWZNVGNhU1RIZ0x0UWhLdHN5ZlZZay1KSTQ5NU9GSFNJdWE2Qk9QUVBBZlZueHZJSmdZS2NqLTFHckxqNFNEU0pBTm9zNnR1X2VKeUVfaERYdENLMjRUTEdrNnlSTVhfSWI3YjNtbjUxNzZlZGdBLnNkRXZ0NXVsYjcyb1Y4OWxhZUwtVUE.73PE14M1UyGDsCm1Qd5UttRHw9IpCDWuQl1kks32ImUr6crOOs9efUfSvv96QPeXCtotslQuECSDiW07Nrthvw;param_sign=aEDJrb;accessToken=eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi51T043OUEwLWZwM0xoS3lTU0NzUGxnLkI2akVpZXlJQkpYZmxqa1prZlFhQm1DVzJJZGRnaTBJZ013TmR5QzFQbzFzY0dDWGVNN0c4QkJVOFRMRW1KaEpUSGk1bDkxcnMxcTJwWFZINDFMUHRFMFE1Z3lGTDBzazVDeTE0US1zUnIxdTVhU1U5VzVYeGM0RV9uTXN4bjkyR0pJTGVwTW5lekRDNlZidWtDZFJXdVVjdk85dkFrT09FMGF4SkhSZUJ6cHp4amFzSDlLX0tRQWRDdF9MbWZNVGNhU1RIZ0x0UWhLdHN5ZlZZay1KSTQ5NU9GSFNJdWE2Qk9QUVBBZlZueHZJSmdZS2NqLTFHckxqNFNEU0pBTm9zNnR1X2VKeUVfaERYdENLMjRUTEdrNnlSTVhfSWI3YjNtbjUxNzZlZGdBLnNkRXZ0NXVsYjcyb1Y4OWxhZUwtVUE.73PE14M1UyGDsCm1Qd5UttRHw9IpCDWuQl1kks32ImUr6crOOs9efUfSvv96QPeXCtotslQuECSDiW07Nrthvw;',
      ),
    ).toBe(
      'eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi51T043OUEwLWZwM0xoS3lTU0NzUGxnLkI2akVpZXlJQkpYZmxqa1prZlFhQm1DVzJJZGRnaTBJZ013TmR5QzFQbzFzY0dDWGVNN0c4QkJVOFRMRW1KaEpUSGk1bDkxcnMxcTJwWFZINDFMUHRFMFE1Z3lGTDBzazVDeTE0US1zUnIxdTVhU1U5VzVYeGM0RV9uTXN4bjkyR0pJTGVwTW5lekRDNlZidWtDZFJXdVVjdk85dkFrT09FMGF4SkhSZUJ6cHp4amFzSDlLX0tRQWRDdF9MbWZNVGNhU1RIZ0x0UWhLdHN5ZlZZay1KSTQ5NU9GSFNJdWE2Qk9QUVBBZlZueHZJSmdZS2NqLTFHckxqNFNEU0pBTm9zNnR1X2VKeUVfaERYdENLMjRUTEdrNnlSTVhfSWI3YjNtbjUxNzZlZGdBLnNkRXZ0NXVsYjcyb1Y4OWxhZUwtVUE.73PE14M1UyGDsCm1Qd5UttRHw9IpCDWuQl1kks32ImUr6crOOs9efUfSvv96QPeXCtotslQuECSDiW07Nrthvw',
    );
  });
  test('cookies test pass', () => {
    expect(
      parseCookies(
        'sso-token',
        'sso-token=eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi5IVjk1MDlCV1VHNnNvUmcyd1RyYVF3LktGWWNuU1R3RGNWVnp5VkVraDYwNjh6Rm1xVFJZNjFPaVNuLU94MXV3R3huVjlwRzdSaGJZNlNpLWtiaFR0UDUxQmU1MjhzSWRUbURkOU9JUklzQUJaSVpKeC1hNkZKSGhYYWhGQUh1QklPSlNqTHRvNmVJcEFWR0ZDWFpGZHhvbm4yNTJSWW9GUHhSVVU5amNQTnRpSHJKeGU4MnZoN0ZLeklZeUVlT1V5RERKeDl4WDhYQUJQZ1BLblpRbW4wVjFvN3VOTk9rSWhtLXppMUZsUWVYMG96dFBFX3FLYjFGbmZkX2tqeE1DcDhETkpQMXJuMjhyaTY2OVVIX21TU2V2OUI0cXVjSkh2UTBweFF1THBwZFNqVjlZOXFGSmp4Unk4N2RxeERvdGpjLm9scnlFLTZXaGlJWTFTcHlCZmxzdGc.OR-j5lKFiH8HDKa9SeR3Mt_CEbnljCaNRq8Q0djsgxBGMZeAcFDjTL23WWEcRTaeAjUKZuSDCgrrNiqGW4FxQQ; param_sign=VZW4s3; accessToken=eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi5IVjk1MDlCV1VHNnNvUmcyd1RyYVF3LktGWWNuU1R3RGNWVnp5VkVraDYwNjh6Rm1xVFJZNjFPaVNuLU94MXV3R3huVjlwRzdSaGJZNlNpLWtiaFR0UDUxQmU1MjhzSWRUbURkOU9JUklzQUJaSVpKeC1hNkZKSGhYYWhGQUh1QklPSlNqTHRvNmVJcEFWR0ZDWFpGZHhvbm4yNTJSWW9GUHhSVVU5amNQTnRpSHJKeGU4MnZoN0ZLeklZeUVlT1V5RERKeDl4WDhYQUJQZ1BLblpRbW4wVjFvN3VOTk9rSWhtLXppMUZsUWVYMG96dFBFX3FLYjFGbmZkX2tqeE1DcDhETkpQMXJuMjhyaTY2OVVIX21TU2V2OUI0cXVjSkh2UTBweFF1THBwZFNqVjlZOXFGSmp4Unk4N2RxeERvdGpjLm9scnlFLTZXaGlJWTFTcHlCZmxzdGc.OR-j5lKFiH8HDKa9SeR3Mt_CEbnljCaNRq8Q0djsgxBGMZeAcFDjTL23WWEcRTaeAjUKZuSDCgrrNiqGW4FxQQ',
        true,
      ),
    ).toBe(
      'eyJhbGciOiJIUzUxMiJ9.ZXlKNmFYQWlPaUpFUlVZaUxDSmhiR2NpT2lKa2FYSWlMQ0psYm1NaU9pSkJNVEk0UTBKRExVaFRNalUySW4wLi5IVjk1MDlCV1VHNnNvUmcyd1RyYVF3LktGWWNuU1R3RGNWVnp5VkVraDYwNjh6Rm1xVFJZNjFPaVNuLU94MXV3R3huVjlwRzdSaGJZNlNpLWtiaFR0UDUxQmU1MjhzSWRUbURkOU9JUklzQUJaSVpKeC1hNkZKSGhYYWhGQUh1QklPSlNqTHRvNmVJcEFWR0ZDWFpGZHhvbm4yNTJSWW9GUHhSVVU5amNQTnRpSHJKeGU4MnZoN0ZLeklZeUVlT1V5RERKeDl4WDhYQUJQZ1BLblpRbW4wVjFvN3VOTk9rSWhtLXppMUZsUWVYMG96dFBFX3FLYjFGbmZkX2tqeE1DcDhETkpQMXJuMjhyaTY2OVVIX21TU2V2OUI0cXVjSkh2UTBweFF1THBwZFNqVjlZOXFGSmp4Unk4N2RxeERvdGpjLm9scnlFLTZXaGlJWTFTcHlCZmxzdGc.OR-j5lKFiH8HDKa9SeR3Mt_CEbnljCaNRq8Q0djsgxBGMZeAcFDjTL23WWEcRTaeAjUKZuSDCgrrNiqGW4FxQQ',
    );
  });
});
