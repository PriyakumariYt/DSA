var arr = [
  [3, 1, 8],
  [2, 6, 0],
];

var sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[i][j] % 3 == 0) {
      sum += arr[i][j];
    }
  }
}
console.log(sum);
