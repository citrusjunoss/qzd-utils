import { browserEnv } from '../src/env';

describe('env.test browserEnv', () => {
  test('browserEnv test pass', () => {
    expect(browserEnv('QQ')).toBe(false);
  });
});
