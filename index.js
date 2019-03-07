function sumItems(array) {
  let sum = 0;
  array.map(item => {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  });
  return sum;
}

console.log(sumItems([[1, 2, [[3], 4]], 5, []]));

module.exports = sumItems;
