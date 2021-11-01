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

const flatten = function(arrayOfArrays) {
  let flattenedArray = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (Array.isArray(arrayOfArrays[i])) {
      for (let j = 0; j < arrayOfArrays[i].length; j++) {
        flattenedArray.push(arrayOfArrays[i][j]);
      }
    } else {
      flattenedArray.push(arrayOfArrays[i]);
    }
  }
  return flattenedArray;
};

// console.log(flatten([1, 2, [3, 4, 4, '3', 'tree'], 5, [6], 'salmon']));

module.exports = flatten;