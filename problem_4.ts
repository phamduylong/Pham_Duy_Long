// Problem 4: Three ways to sum to n

/** Solution 1: Gauss Factorial. Time complexity: O(1)
 *    The most efficient solution I think.
 */
function sum_to_n_a(n: number): number {
    return (n * (n + 1)) / 2;
}

/**
 * Solution 2: Iterative. Time complexity: O(n)
 * This most simple and straightforward approach.
 */
function sum_to_n_b(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}

/**
 * Solution 3: Bitwise. Time complexity: O(1)
 * Basically Gauss Factorial but with bitwise operation. The bigger the input, the faster the solution gets compared to the first solution.
 */
function sum_to_n_c(n: number): number {
    return (n * (n + 1)) >> 1;
}