import { describe, expect, test } from 'vitest';

import { sum } from './index';

describe('sum function', () => {
  test('should return 0 for no arguments', () => {
    expect(sum()).to.toStrictEqual(0);
  });

  test('should return the sum of a flat array of numbers', () => {
    expect(sum([1, 2, 3, 4, 5])).to.toStrictEqual(15);
  });

  test('should return the sum of a nested array of numbers', () => {
    expect(sum([1, 2, [3, 4], 5])).to.toStrictEqual(15);
  });

  test('should handle deeply nested arrays', () => {
    expect(sum([1, [2, [3, [4, 5]]]])).to.toStrictEqual(15);
  });

  test('should handle a mix of numbers and nested arrays', () => {
    expect(sum(1, [2, [3, 4]], 5)).to.toStrictEqual(15);
  });

  test('should return 0 for an empty array', () => {
    expect(sum([])).to.toStrictEqual(0);
  });

  test('should handle single numbers', () => {
    expect(sum(42)).to.toStrictEqual(42);
  });

  test('should handle arrays with a single number', () => {
    expect(sum([42])).to.toStrictEqual(42);
  });
});
