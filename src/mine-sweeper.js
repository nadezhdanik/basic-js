const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let x = 0; x < matrix.length; x++) {
    const row = [];

    for (let y = 0; y < matrix[0].length; y++) {
      let count = 0;

      for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
          if (i >= 0 && j >= 0 && i < matrix.length && j < matrix[0].length) {
            if (matrix[i][j] && !(i === x && j === y)) {
              count++;
            }
          }
        }
      }
      row.push(count);
    }
    result.push(row);
  }
  return result;
}

module.exports = {
  minesweeper,
};
