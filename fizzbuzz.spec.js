const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz test', () => {
  it('should hello size is 5', () => {
    expect('hello').toHaveLength(5);
  })

  it('should returns fizz when 3', () => {
    const result = fizzbuzz(3);

    expect(result).toEqual('fizz');
  })

  it('should returns buzz when multiple of 5', () => {
    const result = fizzbuzz(15);

    expect(result).toEqual('fizzbuzz');
  })
})
