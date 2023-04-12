var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 6, 6];
function loopInLoop(arr) {
  let res = "no loop";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]&& i!=j) {
        res = "loop";
      }
    }
  }
  console.log(res);
}
loopINLoop(arr1)
