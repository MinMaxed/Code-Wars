function find_average(array) {
  let avg = array.reduce((acc, val) =>
    (acc + val)) / array.length;
  return avg;
}