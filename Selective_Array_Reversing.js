function selReverse(array, length) {
  let new_array = [];
  if (length === 0 || array.length === 0) {
    return array;
  }
  if (array.length < length) {
    return array.reverse();
  }
  let new_i = 0;
  for (i = length; array.length !== 0; ) {
    new_array[new_i] = Array.from(array.slice(0, i).reverse());
    array.splice(0, i);
    new_i++;
  }
  return new_array.flat();
}
console.log(selReverse([1, 2, 3, 4, 5, 6], 2));

//https://www.codewars.com/kata/58f6000bc0ec6451960000fd
