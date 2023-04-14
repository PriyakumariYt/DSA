var arr = [
  [1, 2, 3, 4], // [5 1 5 1]
  [5, 6, 7, 8], // [6 2 6 2]
  [1, 2, 3, 4], // [7 3 7 3]
  [5, 6, 7, 8], // [8 4 8 4]
];

for (let j = 0; j < arr.length; j++) {
  let bag = "";
  for (let i = arr[0].length - 1; i >= 0; i--) {
    bag += arr[i][j] + " ";
  }
  console.log(bag);
}
console.log(".............");
var arr = [
  [1, 2, 3, 4], //[4,3,2,1]
  [5, 6, 7, 8],//[5,6,7,8],
  [2, 6, 9, 3],//[3,9,6,2],
  [9, 6, 2, 3],//[9,6,2,3]
];
var row = arr.length;
var cols = arr[0].length;

for (let i = 0; i < arr.length; i++) {
  let bag = "";
  if (i % 2 !== 0) {
    for (let j = 0; j < arr[0].length; j++) {
      bag += arr[i][j] + " ";
    }
  } else {
    for (let j = cols - 1; j >= 0; j--) {
      bag += arr[i][j] + " ";
    }
  }
  console.log(bag);
}
console.log(".............");
 var arr = [
   [1, 2, 3, 4], //3269269387651234
   [5, 6, 7, 8],
   [2, 6, 9, 3],
   [9, 6, 2, 3],
 ];
 var row = arr.length;
 var cols = arr[0].length;
 for (let i = cols - 1; i >= 0; i--) {
    // console.log(arr[row-1][j])
   if (i % 2 == 0) {
     for (let j = 0; j < row; j++) {
       console.log(arr[i][j])
     }
   } else {
     for (let j = cols - 1; j >= 0; j--) {
        console.log(arr[i][j])
     }
   }
}
console.log(".............");
var arr = [
  [1, 4, 6, 4], // 1 5 2
  [5, 2, 3, 8], //4 2 9
  [2, 9, 4, 2], // 6 3 4
];             // 4 8 2
var row = arr.length;
var cols = arr[0].length;
for (let i = 0; i < cols; i++) {
  var bag = "";
  for (let j = 0; j < row; j++) {
    bag = bag + arr[j][i] + " ";
  }
  console.log(bag);
}

