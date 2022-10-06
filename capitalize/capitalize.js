const capitalize = (str) => {
  if(str.length > 0){
    const spliting = str.split('');
    spliting[0] = spliting[0].toUpperCase();
    return spliting.join('');
  }
  throw new Error ('empty string provided');
}

module.exports = capitalize