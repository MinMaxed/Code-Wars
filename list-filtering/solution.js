function filter_list(l) {
  // Return a new array with the strings filtered out
 let onlyNums = l.filter (value => typeof value ==='number');
 return onlyNums;
}