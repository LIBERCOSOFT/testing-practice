const stringLength = require('./stringLength.js');

it('equals string length', () => expect(stringLength('test')).toBe(4));
it('equals string length triangulation', () => expect(stringLength('sectest')).toBe(7));
it('empty string given', () => {
  const errorInput = () =>  stringLength('');
  expect(errorInput).toThrow(new Error('empty string provided'))
});
it('more than 10 characters given', () => {
  const errorInput = () =>  stringLength('moreThanTenCharacters');

  expect(errorInput).toThrow(new Error('string contains more than 10 characters'))
});
