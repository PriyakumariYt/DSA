var arr1 = [0, 0, 1, 1, 2, 2, 0, 2, 1, 0];
function findZeroOneTwo(arr) {
  var zero = 0;
  var one = 0;
  var two = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero++;
    }
    if (arr[i] === 1) {
      one++;
    }
    if (arr[i] === 2) {
      two++;
    }
  }
  return { zero, one, two };
}
var n = findZeroOneTwo(arr1);
console.log(n.zero);
console.log(n.one);
console.log(n.two);
