function high(x) {
  let words = x.split(' '),
    highScore = 0,
    result = '';
  for (let i = 0; i < words.length; i++) {
    var s = words[i],
      value = 0;
    for (let j = 0; j < s.length; j++) {
      value += (s.charCodeAt(j) - 96);
    }
    if (value > highScore) {
      highScore = value;
      result = s;
    }
  }
  return result;
}