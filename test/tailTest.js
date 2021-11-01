const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

const words = [1, 3, 5];


// console.log(tail(words)[0]);
assertArraysEqual(tail(words), [3, 5]);