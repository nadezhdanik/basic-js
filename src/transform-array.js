const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr.length) {
    return [];
  }
  return arr.reduce((acc, cur, i, array) => {
    if (cur === "--discard-next") {
      if (array[i + 1]) {
        array.splice(i, 2);
      }
      return acc;
    } else if (cur === "--discard-prev") {
      if (array[i - 1]) {
        acc.pop();
      }
      return acc;
    } else if (cur === "--double-next") {
      if (array[i + 1]) {
        acc.push(array[i + 1]);
      }
      return acc;
    } else if (cur === "--double-prev") {
      if (array[i - 1]) {
        acc.push(array[i - 1]);
      }
      return acc;
    } else {
      acc.push(cur);
      return acc;
    }
  }, []);
}

module.exports = {
  transform,
};
