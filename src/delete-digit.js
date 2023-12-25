const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  for (let i = 0; i < n.toString().length; i++) {
    const str = n.toString().replace(n.toString()[i], "");
    maxNumber = Math.max(maxNumber, +str);
  }
  return maxNumber;
}

module.exports = {
  deleteDigit,
};
