var arr1 = [
  [1, 2, 3, 4],
  [0, 5, 6, 1],
  [9, 3, 0, 8],
];
var arr2 = [
  [8, 8],
  [8, 8],
];

function matrixCompetition(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
var sum1 = matrixCompetition(arr1);
var sum2 = matrixCompetition(arr2);
if (sum1 > sum2) {
  console.log(sum1);
} else {
  console.log(sum2);
}
