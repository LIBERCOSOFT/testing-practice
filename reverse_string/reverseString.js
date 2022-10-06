const reverseString = (string) => {
  if(string.length < 1) throw new Error ('empty string provided');
  if(typeof string !== 'string') throw new Error ('string data type not provided');
  return string.split('').reverse().join('');
};

module.exports = reverseString;