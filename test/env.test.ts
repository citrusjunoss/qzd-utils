import { browserEnv } from '../src/env';

describe('env.test browserEnv', () => {
  test('browserEnv test node string', () => {
    expect(browserEnv('QQ')).toBe(false);
  });
  test('browserEnv test node array', () => {
    expect(browserEnv(['QQ', 'android'])).toBe(false);
  });
});
