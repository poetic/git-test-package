interface RecursiveNumbers extends Array<number | RecursiveNumbers> {
  [key: number]: number | RecursiveNumbers;
}

/**
 *
 * @param array - An array of numbers
 * @description This function takes an array of numbers and returns the sum of all the numbers in the array.
 * @returns The sum of all the numbers in the array.
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
