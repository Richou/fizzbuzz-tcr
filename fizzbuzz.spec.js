const assert = require('assert');
const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz test', () => {
  it('should hello size is 5', () => {
    assert.equal("hello".length, 5)
  })

  it('should 3 display fizz', () => {
    const result = fizzbuzz(3);

    assert.equal(result, "fizz");
  })

  it('should 5 display buzz', () => {
    const result = fizzbuzz(5);

    assert.equal(result, "buzz");
  })

  it('should 2 display 2', () => {
    const result = fizzbuzz(2);

    assert.equal(result, 2);
  })
})