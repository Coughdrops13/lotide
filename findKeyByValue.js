// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`πΎπΎπΎ Assertion Passed: ${actual} === ${expected}.`);
//   } else {
//     console.log(`πππ Assertion Failed: ${actual} !== ${expected}.`);
//   }
// };

const findKeyByValue = function(object, value) {
  let keyArray = Object.keys(object);
  for (const key of keyArray) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'GoT'), undefined);

module.exports = findKeyByValue;