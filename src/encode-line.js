const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let res = '';
  let count = 0;
  let char = ''
  for (let i = 0; i <= str.length; i++) {
    if (str[i] !== char) {
      if (count > 1 && char) {
        res += count + char;
      } else if (char) {
        res += char;
      }
      char = str[i];
      count = '1';
    } else {
      count++;
      char = str[i];
    }
  }

  return res;
}

module.exports = {
  encodeLine
};
