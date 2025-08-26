module.exports = function towelSort(matrix) {
  const result = [];
  if (matrix === undefined) {
    return result;
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let y = 0; y < matrix[i].length; y += 1) {
      if (i % 2 === 0) {
        result.push(matrix[i][y]);
      } else {
        result.push(matrix[i][matrix[i].length - 1 - y]);
      }
    }
  }
  return result;
};
