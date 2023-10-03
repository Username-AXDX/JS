var countBits = function (n) {
  const C = n.toString(2);
  n = 0; //хотел сэкономить память
  for (let i of C) {
    if (i === '1') {
      n++;
    }
  }
  return n;
};
//https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
