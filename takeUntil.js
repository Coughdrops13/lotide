const eqArrays = function(array1, array2) {
  let output;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        output = true;
      } else {
        output = false;
        return output;
      }
    }
    return output;
  } else {
    output = false;
    return output;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🎾🎾🎾 Assertion Passed: the arrays are the same`);
  } else {
    console.log(`🏀🏀🏀 Assertion Failed: the arrays are not the same`);
  }
};

//TEST ARRAYS AND CALLBACK FUNCTIONS
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = [1, 2, 3, 4, '5', 6, 7];
// const firstNeg = function(x) {
//   if (x < 0) {
//     return true;
//   }
// };

// const firstString = function(x) {
//   if (typeof(x) === 'string') {
//     return true;
//   }
// }

const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
};

module.exports = takeUntil;