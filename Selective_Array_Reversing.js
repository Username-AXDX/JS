function selReverse(array, length) {
  let new_array = [];
  if (length === 0 || array.length === 0) {
    return array;
  }
  if (array.length < length) {
    return array.reverse();
  }
  for (i = length - 1; array.length !== 0; ) {
    new_array = Array.of(array.slice(0, i).reverse());
    array.splice(0, i);
  }
  return new_array;
}

//https://www.codewars.com/kata/58f6000bc0ec6451960000fd
