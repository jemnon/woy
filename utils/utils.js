function isDomUsable() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}
function isEven(number) {
  if (number && typeof number === 'number') {
    return number % 2 === 0;
  }
  return false;
}

export { isDomUsable, isEven };
