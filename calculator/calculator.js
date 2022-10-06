class Calculator {
  static add = (a,b) => {
    if(typeof a === 'number' && typeof a === 'number') return a + b;
    throw new Error('no number provided');
  }

  static subtract = (a,b) => {
    if(typeof a === 'number' && typeof a === 'number') return a - b;
    throw new Error('no number provided');
  }

  static divide = (a,b) => {
    if(typeof a === 'number' && typeof a === 'number') return a / b;
    throw new Error('no number provided');
  }

  static multiply = (a,b) => {
    if(typeof a === 'number' && typeof a === 'number') return a * b;
    throw new Error('no number provided');
  }
}

module.exports = Calculator;