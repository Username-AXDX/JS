function zipvalidate(postcode) {
  if (postcode.length != 6) {
    return false;
  }
  if (
    postcode[0] === '0' ||
    postcode[0] === '5' ||
    postcode[0] === '7' ||
    postcode[0] === '8' ||
    postcode[0] === '9'
  ) {
    return false;
  }
  for (let p of postcode) {
    switch (p) {
      case '0':
        break;
      case '1':
        break;
      case '2':
        break;
      case '3':
        break;
      case '4':
        break;
      case '5':
        break;
      case '6':
        break;
      case '7':
        break;
      case '8':
        break;
      case '9':
        break;
      default:
        return false;
    }
  }

  return true;
}

//https://www.codewars.com/kata/552e45cc30b0dbd01100001a/train/javascript
