const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎾🎾🎾 Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🏀🏀🏀 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const countLetters = function(input) {
  let results = {};
  let noSpace = input.split(' ').join('').toLowerCase();
  for (let i = 0; i < noSpace.length; i++) {
    if (results[noSpace[i]]) {
      results[noSpace[i]] += 1;
    } else {
      results[noSpace[i]] = 1;
    }
  }
  return results;
};

console.log(countLetters('a b b ccc ddd d e ee ee ffffff'));
assertEqual(countLetters('a b b ccc ddd d e ee ee ffffff'), {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6});