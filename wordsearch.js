const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
    
  const columnLength = letters.length;
  const rowsLength = letters[0].length;
  
  // use transpose function to flip array, create new array
  // empty matrix init
  let newMatrix = [];

  // create an empty array for each column in the original matrix
  for (let i = 0; i < rowsLength; i++) {
    newMatrix[i] = [];
    // add the relative part of the original matrix
    for (let j = 0; j < columnLength; j++) {
      newMatrix[i][j] = letters[j][i];
    }

  }

  const verticalJoin = newMatrix.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
    
};

module.exports = wordSearch;