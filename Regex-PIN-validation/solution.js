function validatePIN(pin) {
  let valid = false;
  if (/^[\d_]{4}$/.test(pin) || /^[\d_]{6}$/.test(pin))
    valid = true;
  return valid;
}