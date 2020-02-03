const assert = require('assert');
const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz test', () => {
  it('should hello size is 5', () => {
    assert.equal('hello'.length, 5)
  })

  it('should 143 display itself', () => {
    const result = fizzbuzz(143)

    assert.equal(143, result)
  })
})
