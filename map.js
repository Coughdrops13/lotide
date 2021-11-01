const eqArrays = function(array1, array2) {
  let output = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      output = true;
    } else {
      output = false;
      return output;
    }
  }
  return output;
};



  // if (array1.length === array2.length) {
  //   for (let i = 0; i < array1.length; i++) {
  //   }
  //   return output;
  // } else {
  //   output = false;
  //   return output;
  // }

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`🎾🎾🎾 Assertion Passed: the arrays are the same`);
//   } else {
//     console.log(`🏀🏀🏀 Assertion Failed: the arrays are not the same`);
//   }
// };

//  const words = ["ground", "control", "to", "major", "tom"];
const firstLetter = function(element) {
  return element[0];
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// console.log(map(['one', 'two', 'three', 'four'], firstLetter));

// assertArraysEqual(map(['one', 'two', 'three', 'four'], firstLetter), ['o', 't', 't', 'f']);

module.exports = map;