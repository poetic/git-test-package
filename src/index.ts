interface RecursiveNumbers extends Array<number | RecursiveNumbers> {
  [key: number]: number | RecursiveNumbers;
}

/**
 *
 * @param args - Numbers, Arrays of Numbers, or Nested Arrays of Numbers
 * @description Sums all args passed to the function, including nested arrays.
 * @returns Sum of all Args
 * @example
 * ```ts
 * import { sum } from 'poetic/git-test-package';
 * const numbers = [1, 2, 3, 4, 5];
 * const result = sum(numbers);
 * console.log(result); // Output: 15
 *
 * const nestedNumbers = [1, 2, [3, 4], 5];
 * const nestedResult = sum(nestedNumbers);
 * console.log(nestedResult); // Output: 15
 * ```
 */
export function sum(...args: RecursiveNumbers): number {
  if (args.length === 0) {
    return 0;
  }

  let total = 0;
  const stack: RecursiveNumbers = [...args];

  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
    } else if (typeof current === 'number') {
      total += current;
    }
  }

  return total;
}
