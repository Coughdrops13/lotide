const assert = require('chai').assert;
const tail = require('../tail');

const words = [1, 3, 5];

describe('#tail', () => {
  it('should return all but the first element of an array', () => {
    assert.deepEqual(tail(words), [3, 5]);
  });
});

// console.log(tail(words)[0]);

