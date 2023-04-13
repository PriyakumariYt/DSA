var arr = [
  [4, 7, 1, 1, 7],
  [8, 9, 9, 6, 1],
  [6, 4, 9, 5, 1],
  [7, 7, 4, 7, 7],
  [8, 6, 2, 5, 5],
];
var bag = "";
for (let i = 0; i < arr.length; i++) {
  if (i % 2 !== 0) {
    for (let j = 0; j < arr[0].length; j++) {
      bag += arr[i][j] + " ";
    }
  } else {
    for (let j = arr[0].length - 1; j >= 0; j--) {
      bag += arr[i][j] + " ";
    }
  }
}
//console.log(bag);

var arr = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];
var bag = "";

for (let i = 0; i < arr.length; i++) {
  if (i % 2 !== 0) {
    for (let j = 0; j < arr[0].length; j++) {
      bag += arr[i][j] + " ";
    }
  } else {
    for (let j = arr[0].length - 1; j >= 0; j--) {
      bag += arr[i][j] + " ";
    }
  }
}
console.log(bag);


