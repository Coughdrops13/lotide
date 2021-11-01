// const eqArrays = function(array1, array2) {
//   let output;
//   if (array1.length === array2.length) {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] === array2[i]) {
//         output = true;
//       } else {
//         output = false;
//         return output;
//       }
//     }
//     return output;
//   } else {
//     output = false;
//     return output;
//   }
// };

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`🎾🎾🎾 Assertion Passed: the arrays are the same`);
//   } else {
//     console.log(`🏀🏀🏀 Assertion Failed: the arrays are not the same`);
//   }
// };

const letterPositions = function(input) {
  let results = {};
  const inputLowerCase = input.toLowerCase();
  for (let i = 0; i < inputLowerCase.length; i++) {
    if (inputLowerCase[i] !== ' ') {
      if (results[inputLowerCase[i]]) {
        results[inputLowerCase[i]].push(i);
      } else {
        results[inputLowerCase[i]] = [i];
      }
    }
  }
  return results;
};

const dumb = 'abdddddd';
console.log(letterPositions(dumb));

// assertArraysEqual(letterPositions('abc defe').e, [5, 7])

module.exports = letterPositions;