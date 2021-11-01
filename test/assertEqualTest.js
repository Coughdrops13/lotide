const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('should return true when two compared strings are identical', () => {
    assert.strictEqual('Donut', 'Donut');
  });
  it('should return false when two compared strings are not identical', () => {
    assert.notStrictEqual('Lighthouse Labs', 'Bootcamp');
  })
});


