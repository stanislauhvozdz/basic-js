import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(/* sampleActivity */) {
  throw new NotImplementedError('Not implemented');

  const HALF_LIFE_PERIOD = 10;
  let MODERN_ACTIVITY;

  function isNumber (str) {
    if (typeof str != "string") return false 
    return !isNaN(str) && !isNaN(parseFloat(str))
  }

  if (isNumber(string)) {
    const MODERN_ACTIVITY = +string;
    let radiocarbonDating = Math.floor(MODERN_ACTIVITY / HALF_LIFE_PERIOD);
    return radiocarbonDating
  } else {
    return false
  }
}

