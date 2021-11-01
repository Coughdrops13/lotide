const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe('#eqArrays', () => {
  it('should return true when arrays are identical', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should return false when arrays are not identical', () => {
    assert.notStrictEqual(eqArrays(['1', '2', '4'], ['1', '2', '3']), true);
  })
})
