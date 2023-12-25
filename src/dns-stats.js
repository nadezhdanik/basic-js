const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.map((el) => {
    const array = el.split(".").reverse();
    let segment = "";
    for (const cut of array) {
      segment += `.${cut}`;
      result[segment] = result[segment] ? result[segment] + 1 : 1;
    }
  });
  return result;
}

module.exports = {
  getDNSStats,
};
