// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`πΎπΎπΎ Assertion Passed: ${actual} === ${expected}.`);
//   } else {
//     console.log(`πππ Assertion Failed: ${actual} !== ${expected}.`);
//   }
// };

const countLetters = function(input) {
  let results = {};
  let noSpace = input.split(' ').join('').toLowerCase();
  for (let i = 0; i < noSpace.length; i++) {
    if (results[noSpace[i]]) {
      results[noSpace[i]] += 1;
    } else {
      results[noSpace[i]] = 1;
    }
  }
  return results;
};

// console.log(countLetters('a b b ccc ddd d e ee ee ffffff'));

module.exports = countLetters;