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

// const source = ['1', '2', '3'];
// const itemsToRemove = [1, 2, '3'];


const without = function(source, itemsToRemove) {
  // let outputArray = [];
  // for (let i = 0; i < source.length; i++) {
  //   let itemFound = false;
  //   for (let j = 0; j < itemsToRemove.length; j++) {
  //     if (itemsToRemove[j] === source[i]) {
  //       itemFound = true;
  //     }
  //   }
  //   if (!itemFound) {
  //     outputArray.push(source[i]);
  //   }
  // }
  // return outputArray;
  const outputArray = source.filter(element => !itemsToRemove.includes(element));
  return outputArray;
};


// console.log(without(source, itemsToRemove));
// assertArraysEqual([1, 2, 3], without([1, '1', 2, '2', 3, '3'], ['1', '2', '3']));

module.exports = without;