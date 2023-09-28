function digitalRoot(n) {
  let value = 0;
  do {
    value = sum_of_digits(n);
  } while (value % 10 !== 0);

  return value;
}

function sum_of_digits(N) {
  let array = [];
  let b = N;
  for (let i = 0; b !== 0; i++) {
    array[i] = N % 10;
    b = parseInt(b, 10);
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
} //partucalar function for adding digits
//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
