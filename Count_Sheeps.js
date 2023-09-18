function countSheeps(sheep) {
  let counter = 0; //How many Sheeps we have?
  for (let i = 0; i < sheep.length; i++) {
    sheep[i] ? counter++ : (counter = counter); //in fact, undefined-false, Null-false
  }
  return counter;
}
//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
