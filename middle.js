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
//     console.log(`πΎπΎπΎ Assertion Passed: the arrays are the same`);
//   } else {
//     console.log(`πππ Assertion Failed: the arrays are not the same`);
//   }
// };

// returns with middle 1 or two elements of an array depending on array length being odd or even respectively

const middle = function(array) {
  let outputArray = [];
  let middle = array.length / 2;
  if (array.length <= 2) {
    return outputArray;
  } else if (array.length % 2 === 0) {
    outputArray.push(array[middle - 1], array[middle]);
    return outputArray;
  } else {
    outputArray.push(Math.ceil(middle));
    return outputArray;
  }
};

// console.log(middle([1, 2, 3, 4, 5, 6, 7]));

module.exports = middle;