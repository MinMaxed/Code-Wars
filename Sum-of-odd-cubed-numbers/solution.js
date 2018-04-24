function cubeOdd(arr) {
  let oddNumSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return undefined;
    }
    else if (arr[i] % 2 !== 0) {
      oddNumSum += Math.pow(arr[i], 3);
    }
  }
  return oddNumSum;
}