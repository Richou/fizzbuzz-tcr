const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz test', () => {
  it('should hello size is 5', () => {
    expect('hello').toHaveLength(5);
  })

  it('should fail', () => {
    const result = fizzbuzz(3);

    expect(result).toEqual('fizz');
  })
})
