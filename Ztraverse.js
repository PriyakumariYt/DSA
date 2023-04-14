var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var row = arr.length;
var cols = arr[0].length;
var bag = "";
for (let i = 0; i < cols; i++) {
  bag += arr[0][i];
}
for (let i = 1, j = 1; i < row, j >= 0; i++, j--) {
  bag += arr[i][j];
}

for (let i = 1; i < cols; i++) {
  bag += arr[2][i];
}

console.log(bag)
