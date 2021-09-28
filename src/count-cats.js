import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

export default function countCats(matrix) {

  let searchSubject = '^^'
  let count = 0;
  let oneArray = matrix.flat();

  oneArray.forEach(element => {
    if (typeof element === 'string' && element.length === 2 && element.includes(searchSubject)) {
      count++;
    }
  });
  return count;
}