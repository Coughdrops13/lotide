const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('middle 1 or two elements of an array depending on array length being odd or even respectively', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});