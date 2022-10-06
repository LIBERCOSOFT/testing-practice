const capitalize = require('./capitalize.js');

describe('capitalize', () => {
  it('return first letter capitalized', () => {
    const testCase = capitalize('first');
    expect(testCase).toBe('First')
  });
  it('throw error on empty string input', () => {
    let errorInput = () => capitalize('');
    expect(errorInput).toThrow(new Error('empty string provided'));
  })
 
});