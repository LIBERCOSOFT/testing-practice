const Calculator = require('./calculator.js');

describe ('calculator', () => {
  describe('addition', () => {
    const testCase = Calculator.add(1,1);
    const errorInput = () =>  Calculator.add('');

    it('returns the addition of two numbers', () => {
      expect(testCase).toBe(2);
    })
    it('no number given', () => {
    expect(errorInput).toThrow(new Error('no number provided'));
    });
    it('result should be numeric', () => {
      expect(typeof testCase).toBe('number');
    });
  });

  describe('substraction', () => {
    const testCase = Calculator.subtract(2,1);
    const errorInput = () =>  Calculator.subtract('');

    it('returns the substraction of two numbers', () => {
      expect(testCase).toBe(1);
    })
    it('no number given', () => {
    expect(errorInput).toThrow(new Error('no number provided'));
    });
    it('result should be numeric', () => {
      expect(typeof testCase).toBe('number');
    });
  });

  describe('division', () => {
    const testCase = Calculator.divide(4,2);
    const errorInput = () =>  Calculator.divide('');

    it('returns the division of two numbers', () => {
      expect(testCase).toBe(2);
    });
    it('no number given', () => {
    expect(errorInput).toThrow(new Error('no number provided'));
    });
    it('result should be numeric', () => {
      expect(typeof testCase).toBe('number');
    });
  });

  describe('multiplication', () => {
    const testCase = Calculator.multiply(2,2);
    const errorInput = () =>  Calculator.add('');

    it('returns the multiplication of two numbers', () => {
      expect(testCase).toBe(4);
    })
    it('no number given', () => {
    expect(errorInput).toThrow(new Error('no number provided'));
    });
    it('result should be numeric', () => {
      expect(typeof testCase).toBe('number');
    });
  });
});