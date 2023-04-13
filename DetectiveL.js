var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
  
];

var top = 0;
var left = 0;
var bottom = arr.length - 1;
var right = arr[0].length;

var bag = "";

for (let i = top; i <= bottom; i++) {
  bag = bag + arr[i][left] + " ";
}
left++;
for (let i = left; i < right; i++) {
  bag += arr[bottom][i] + " ";
}
for (let i = top; i < bottom; i = i + 1) {
  bag += arr[i][left] + " ";
}
left++;
for (let i = left; i <= right - 1; i++) {
  bag += arr[bottom - 1][i] + " ";
}
for (let i = top; i < bottom - 1; i++) {
  bag += arr[i][left] + " ";
}

console.log(bag);

var arr =  [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10,11,12],
      ];
      
      var top = 0;
      var left = 0;
      var bottom = arr.length - 1;
      var right = arr[0].length;
      
      var bag = "";
      
      for (let i = top; i <= bottom; i++) {
        bag = bag + arr[i][left] + " ";
      }
      left++;
      for (let i = left; i < right; i++) {
        bag += arr[bottom][i] + " ";
      }
      for (let i = top; i < bottom; i = i + 1) {
        bag += arr[i][left] + " ";
      }
      left++;
      for (let i = left; i <= right - 1; i++) {
        bag += arr[bottom - 1][i] + " ";
      }
      for (let i = top; i < bottom - 1; i++) {
        bag += arr[i][left] + " ";
      }
      
      console.log(bag);
      
