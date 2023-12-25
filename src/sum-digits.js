const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits2(n) {
  const sum = [...n.toString()].reduce((acc, cur) => {
    return acc + +cur;
  }, 0);

  console.log('-----------------------------');
  
  console.log('sum', sum);
  console.log('-----------------------------');
  
  if (sum.toString().length > 1) {
    getSumOfDigits(sum);
  }
  console.log('return sum', sum);

  return sum;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

function getSumOfDigits(n) {
  let sum = [...n.toString()].reduce((acc, cur) => {
    return +acc + +cur;
  }, 0);

  if (sum >= 10) {
    sum = getSumOfDigits(sum);
  }

  return sum;
}

module.exports = {
  getSumOfDigits
};
