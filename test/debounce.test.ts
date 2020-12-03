import assert from 'assert';
import { debounce } from './../src/debounce';
import root from '../src/utils/root';

const identity =(value: any) => value
const push = Array.prototype.push
const argv = process ? process.argv : undefined
const isPhantom = root.phantom;

type IDebounced = (...args: any) => any

describe('debounce', function() {
  it('should debounce a function', function(done) {
    var callCount = 0;

    const debounced: IDebounced = debounce((value: any) => {
      ++callCount;
      return value;
    }, 32);

    var results = [debounced('a'), debounced('b'), debounced('c')];
    assert.deepStrictEqual(results, [undefined, undefined, undefined]);
    assert.strictEqual(callCount, 0);

    setTimeout(function() {
      assert.strictEqual(callCount, 1);

      var results = [debounced('d'), debounced('e'), debounced('f')];
      assert.deepStrictEqual(results, ['c', 'c', 'c']);
      assert.strictEqual(callCount, 1);
    }, 128);

    setTimeout(function() {
      assert.strictEqual(callCount, 2);
      done();
    }, 256);
  });

  it('subsequent debounced calls return the last `func` result', function(done) {
    var debounced: IDebounced = debounce(identity, 32);
    debounced('a');

    setTimeout(function() {
      assert.notStrictEqual(debounced('b'), 'b');
    }, 64);

    setTimeout(function() {
      assert.notStrictEqual(debounced('c'), 'c');
      done();
    }, 128);
  });

  it('should support a `maxWait` option', function(done) {
    let callCount = 0;
    const debounced: IDebounced = debounce(function(value) {
      ++callCount;
      return value;
    }, 32, { 'maxWait': 64 });

    debounced();
    debounced();
    assert.strictEqual(callCount, 0);

    setTimeout(function() {
      assert.strictEqual(callCount, 1);
      debounced();
      debounced();
      assert.strictEqual(callCount, 1);
    }, 128);

    setTimeout(function() {
      assert.strictEqual(callCount, 2);
      done();
    }, 256);
  });


  it('should queue a trailing call for subsequent debounced calls after `maxWait`', function(done) {
    let callCount = 0;

    const debounced: IDebounced = debounce(function() {
      ++callCount;
    }, 200, { 'maxWait': 200 });

    debounced();

    setTimeout(debounced, 190);
    setTimeout(debounced, 200);
    setTimeout(debounced, 210);

    setTimeout(function() {
      assert.strictEqual(callCount, 2);
      done();
    }, 500);
  });

  it('should cancel `maxDelayed` when `delayed` is invoked', function(done) {
    let callCount = 0;

    const debounced: IDebounced = debounce(function() {
      callCount++;
    }, 32, { 'maxWait': 64 });

    debounced();

    setTimeout(function() {
      debounced();
      assert.strictEqual(callCount, 1);
    }, 128);

    setTimeout(function() {
      assert.strictEqual(callCount, 2);
      done();
    }, 192);
  });
});