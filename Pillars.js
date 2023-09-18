function pillars(numPill, dist, width) {
  let L = 0;
  numPill > 1 ? (L = (numPill - 2) * width + 100 * dist * (numPill - 1)) : L;

  return L;
}
//https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
