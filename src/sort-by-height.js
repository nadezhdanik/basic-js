const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const negativeIndices = arr
    .map((el, i) => (el === -1 ? i : "x"))
    .filter((el) => el !== "x");
  const sortedArray = arr.sort((a, b) => a - b);
  const cleanArray = sortedArray.slice(sortedArray.lastIndexOf(-1) + 1);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (negativeIndices.includes(i)) {
      result.push(-1);
    } else {
      result.push(cleanArray.shift());
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
