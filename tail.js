const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎾🎾🎾 Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🏀🏀🏀 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const tail = function(array) {
  let arrayTail = [];
  if (array === []) {
    return [];
  } else if (array.length === 1) {
    return [];
  } else {
    for (let i = 1; i < array.length; i ++) {
      arrayTail.push(array[i]);
    }
    return arrayTail;
  }
};

const words = [];
console.log(tail(words));
assertEqual(words.length, 0);
console.log(words.length);