var arr = [2, 3, 4, 5, 6, 81, 9];
var target = 11;
var ans = "no";
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      ans = "yes";
    }
  }
  // console.log(ans);
  
  var arr = [1, 2, 3, 12, 5, 65, 7, 13];
  var target = 11;
  var ans = "no";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        ans = "yes";
      }
    }
  }
}
//  console.log(ans);
var arr1 = [1, 2, 3, 12, 4, 65, 7, 9];
function find_pair(arr) {
  var target = 11;
  var count = 0;
  var ans = "no";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        ans = "yes";
        count++;
      }
    }
  }
  console.log(count);
}
find_pair(arr1);
