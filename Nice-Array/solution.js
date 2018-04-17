function isNice(arr) {
  console.log(arr);
  let niceIsTrue = false;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr.includes(arr[i] + 1)) || arr.includes(arr[i] - 1)) {
      counter += 1;
    }
  }
  if (counter !== arr.length && arr.length > 0) {
    niceIsTrue = false;
  } else if (counter === arr.length && arr.length > 0) {
    niceIsTrue = true;
  }
  return niceIsTrue;
}