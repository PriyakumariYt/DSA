
// left to right, right to bottom

let array = [
  [1, 2, 3, 4, 3, 2, 5],
  [5, 6, 7, 7, 5, 0, 9],
  [9, 1, 3, 8, 4, 3, 9],
  [1, 2, 3, 4, 5, 0, 6],
  [1, 2, 3, 4, 5, 6, 5],
  [7, 8, 9, 1, 2, 6, 5],
];
var spiralOrder = function (matrix) {
  let N = matrix.length;
  let M = matrix[0].length;
  let left = 0;
  let right = M;
  let top = 0;
  let bottom = N;
  let bag = [];
  let count = 0;
  while (count < matrix[0].length * matrix.length) {
    for (let i = left; i < right && count < N * M; i++) {
      bag.push(matrix[top][i]);
      count++;
    }
    top++;
    for (let i = top; i < bottom && count < N * M; i++) {
      bag.push(matrix[i][right - 1]);
      count++;
    }
    right--;
    for (let i = right - 1; i >= left && count < N * M; i--) {
      bag.push(matrix[bottom - 1][i]);
      count++;
    }
    bottom--;
    for (let i = bottom - 1; i >= top && count < N * M; i--) {
      bag.push(matrix[i][left]);
      count++;
    }
    left++;
  }

  return bag;
};
var ans = spiralOrder(array);
console.log(ans);