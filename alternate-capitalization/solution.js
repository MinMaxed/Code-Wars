function capitalize(s) {
  let strArray = s.split('');
  let arrOdd = [];
  arrOdd.push(strArray[0]);
  strArray[0] = strArray[0].toUpperCase();
  for (let i = 1; i < strArray.length; i++) {
    if (i % 2 === 0) {
      arrOdd.push(strArray[i]);
      strArray[i] = strArray[i].toUpperCase();
    } else {
      arrOdd[i] = strArray[i].toUpperCase();
    }
  }
  let answerEven = strArray.join('');
  let answerOdd = arrOdd.join('');

  return [answerEven, answerOdd];
}