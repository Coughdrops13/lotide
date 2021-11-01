// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🎾🎾🎾 Assertion Passed: ${actual} === ${expected}.`);
//   } else {
//     console.log(`🏀🏀🏀 Assertion Failed: ${actual} !== ${expected}.`);
//   }
// };


const findKey = function(object, callback) {
  const keyArray = Object.keys(object);
  let result = false;
  for (const key of keyArray) {
    if (callback(object[key])) {
      // console.log(key);
      result = true;
      return result;
    } 
  }
  return result;
};

// findKey({
//   "Blue Hill": { stars: 1, rats: 1000 },
//   "Akaleri":   { stars: 3, rats: 3 },
//   "noma":      { stars: 2, rats: 1000 },
//   "elBulli":   { stars: 3, rats: 1000 },
//   "Ora":       { stars: 2, rats: 1000 },
//   "Akelarre":  { stars: 3, rats: 1000 }
// }, x => x.rats === 3);

module.exports = findKey;