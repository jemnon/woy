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
function parsedCategories(categories) {
  const list = [];
  if (categories && Array.isArray(categories)) {
    categories.forEach(category => list.push(category.name));
    return list;
  }
  return null;
}

export { isDomUsable, isEven, parsedCategories };
