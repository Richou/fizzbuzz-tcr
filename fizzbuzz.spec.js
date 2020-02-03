const assert = require('assert');
const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz test', () => {
  it('should hello size is 5', () => {
    assert.equal('hello'.length, 5)
  })

  it('should 3 returns fizz', () => {
    const result = fizzbuzz(3);

    assert.equal('fizz', result);
  })

  it('should 45 returns fizzbuzz', () => {
    const result = fizzbuzz(45);

    assert.equal('fizzbuzz', result);
  })
})
