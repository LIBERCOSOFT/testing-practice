const stringLength = (string) => {
  if(string.length < 1) throw new Error ('empty string provided');
  if(string.length > 10) throw new Error ('string contains more than 10 characters');
  return string.length
};

module.exports = stringLength;