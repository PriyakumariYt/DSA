var arr1 = [9, 8, 7, 9, 0, 1, 2, 3, 6, -7];
var arr2 = [999, 8, 7, 9, -10, 1, 2, 3, 6];

function find_min(arr) {
  var min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}
// find_min(arr1);

function find_max(arr) {
  var max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
// find_max(arr1);

function find_min_max(arr, type = "min") {
  if(type==='max') return find_max(arr)
  else return find_min(arr)
}
find_min_max(arr2, (type = "max"));
find_min_max(arr2)
