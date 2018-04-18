function disemvowel(str) {
  let noVowels = str.replace(/[aeiouAEIOU]/g, '');
  return noVowels;
}