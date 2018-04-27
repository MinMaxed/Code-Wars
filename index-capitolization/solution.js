function capitalize(s, arr) {
  let letters = s.split('');
  if (arr.length) {
    arr.forEach((ele) => {
      if (ele < letters.length) {
        letters[ele] = letters[ele].toUpperCase();
      }
    });
  }
  letters = letters.join('');
  return letters;
}