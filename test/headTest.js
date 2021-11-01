// const assertEqual = require('../assertEqual');
const head = require('../head');

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');

const assert = require('chai').assert;

describe("#head", () => {
  it('should return first element in an array', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('should return the single element in an array with 1 element', () => {
    assert.strictEqual(head(['5']), '5');
  });
});