var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
var n = arr.length;
var m = arr[0].length;
var sum = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (i !== 0 && i !== n - 1 && j !== 0 && j !== m - 1) {
      sum = sum + arr[i][j];
    }
  }
}

console.log(sum);
