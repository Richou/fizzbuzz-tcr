const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz test', () => {
  it('should hello size is 5', () => {
    expect('hello').toHaveLength(5);
  })

  it('should return fizz', () => {
    const result = fizzbuzz(3);

    expect(result).toEqual('fizz');
  })

  it('should returns buzz', () => {
    const result = fizzbuzz(5);

    expect(result).toEqual('buzz');
  })
})
