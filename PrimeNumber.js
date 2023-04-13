var a = 2;
var b = 11;

var result = "";
for (i = a; i <= b; i++) {
  var isPrime = 1;
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime++;
    }
  }
  if (i > 1 && isPrime == 1) {
    result = result + i + " ";
  }
}
console.log(result);
// var a = 2;
// var b = 11;
// var res = "";
// for (let i = a; i <= b; i++) {
//   var prime = 1;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       prime++;
//     }
//   }
//   if (i > 1 && prime == 1) {
//     res += i + " ";
//   }
// }
// console.log(res);

// var a = 7;
// var b = 19;
// var res = "";
// for (let i = a; i <= b; i++) {
//   var primeNo = 1;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       primeNo++;
//     }
//   }
//   if (i > 1 && primeNo == 1) {
//     res += i + " ";
//   }
// }
// console.log(res);
function primeNo_checked(num) {
  let count = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 0) {
    return true;
  } else {
    return false;
  }
}

let ans = primeNo_checked(5);
console.log(ans)