const reverseString = require('./reverseString.js');

it('empty string given', () => {
  const errorInput = () =>  reverseString('');
  expect(errorInput).toThrow(new Error('empty string provided'))
});
it('wrong data type given', () => {
  const errorInput = () =>  reverseString([1,2,3]) || reverseString({one: 1});
  expect(errorInput).toThrow(new Error('string data type not provided'))
});
it('return reverse string', () => expect(reverseString('test')).toBe('tset'));
it('return reverse string palindrome', () => expect(reverseString('eye')).toBe('eye'));
it('return reverse string triangulation', () => expect(reverseString('sectest')).toBe('tsetces'));
