// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🎾🎾🎾 Assertion Passed: ${actual} === ${expected}.`);
//   } else {
//     console.log(`🏀🏀🏀 Assertion Failed: ${actual} !== ${expected}.`);
//   }
// };

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
const eqArrays = require('./eqArrays');

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


// const ab = {a: '1', b: '2'};
// const ba = {b: '2', a: '1'};
// assertEqual(eqObjects(ab, ba), true);
// const abc = {a: '1', b: '2', c: '3'};
// assertEqual(eqObjects(ab, abc), false);
// const cd = {c: '1', d: ['2', 3]};
// const dc = {d: ['2', 3], c: '1'};
// assertEqual(eqObjects(cd,dc), true);
// const cd2 = {c: '1', d: ['2', 3, 4]};
// assertEqual(eqObjects(cd, cd2), false);


//console.log(eqObjects(abc, ba));


module.exports = eqObjects;