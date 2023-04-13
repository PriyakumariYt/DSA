let arr = [13, 89, 81, 66, 81, 63, 71, 76, 73, 81];
 let target = 65;
// function firstGreater(arr, target) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > target) {
//       arr1.push(arr[i]);
//     }
//   }
//   console.log(Math.min(...arr1));
// }
// firstGreater(arr, target);

//2nd way

function firstGreater(arr, target) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      arr1.push(arr[i]);
    }
  }
  let ans = -1;
  let min = Infinity;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < min) {
      min = arr1[i];
      ans = arr1[i];
    }
  }

  console.log(ans);
}

firstGreater(arr, target);
