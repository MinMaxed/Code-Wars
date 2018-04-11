function abbrevName(name) {
  var input = name.toUpperCase();
  var initials = input.split(' ');
  var first = initials[0];
  var firstInitial = first[0];

  var last = initials[1];
  var lastInitial = last[0];
  return `${firstInitial}.${lastInitial}`;
}

