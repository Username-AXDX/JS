function filter_list(l) {
  let new_L = []; //new array
  let i = 0; //counter of new_L
  for (let c of l) {
    if (typeof c === 'number') {
      new_L[i++] = c;
    }
  }
  return new_L;
}
//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
