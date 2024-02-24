/**
 * Generate a Fibonacci sequence of length n
 * @param n
 * @return {number[]}
 */
const generateFibonacci = (n) => {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence.slice(0, n);
};

module.exports = { generateFibonacci };
