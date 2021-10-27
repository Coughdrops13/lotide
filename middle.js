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

const middle = function(array) {
  let outputArray = [];
  if (array.length <= 2) {
    return outputArray;
  } else if (array.length % 2 === 0) {
    outputArray.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
    return outputArray;
  } else {
    outputArray.push(Math.ceil(array.length / 2));
    return outputArray;
  }
};

console.log(middle([1]));