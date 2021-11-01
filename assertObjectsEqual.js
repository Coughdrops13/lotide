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

const eqObjects = function(object1, object2) {
  let arrayOfKeys1 = Object.keys(object1);
  let arrayOfKeys2 = Object.keys(object2);
  if (arrayOfKeys1.length === arrayOfKeys2.length) {
    for (const key of arrayOfKeys1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`🎾🎾🎾 Assertion Passed: ${inspect(object1)} is the same as ${inspect(object2)}`);
  } else {
    console.log(`🏀🏀🏀 Assertion Failed: ${inspect(object1)} is not the same as ${inspect(object2)}`);
  }
};

// assertObjectsEqual({a: 1, b: 2,}, {b: 2, a: 1,});
module.exports = assertObjectsEqual;