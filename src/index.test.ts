import { sum } from './index';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('sum function', () => {
  it('should return 0 for no arguments', () => {
    assert.strictEqual(sum(), 0);
  });

  it('should return the sum of a flat array of numbers', () => {
    assert.strictEqual(sum(1, 2, 3, 4, 5), 15);
  });

  it('should return the sum of a nested array of numbers', () => {
    assert.strictEqual(sum([1, 2, [3, 4], 5]), 15);
  });

  it('should handle deeply nested arrays', () => {
    assert.strictEqual(sum([1, [2, [3, [4, 5]]]]), 15);
  });

  it('should handle a mix of numbers and nested arrays', () => {
    assert.strictEqual(sum(1, [2, [3, 4]], 5), 15);
  });

  it('should return 0 for an empty array', () => {
    assert.strictEqual(sum([]), 0);
  });

  it('should handle single numbers', () => {
    assert.strictEqual(sum(42), 42);
  });

  it('should handle arrays with a single number', () => {
    assert.strictEqual(sum([42]), 42);
  });
});
