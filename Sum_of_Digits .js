function digitalRoot(n) {
  function sum_of_digits(N = n) {
    let array = [];
    for (let i = 0; b !== 0; i++) {
      array[i] = N % 10;
      N = parseInt(N, 10);
    }
    let sum = 0;
    for (let i of array) {
      sum += i;
    }
    return sum;
  }
  while (n % 10 !== 0) {
    n = sum_of_digits(n);
  }
  return n;
}
//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
