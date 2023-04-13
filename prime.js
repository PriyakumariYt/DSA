// var arr = [10, 20, 3, 4, 7, 13, 1,19,23,29,31];
// function isPrime(num) {
//         var count = 0;
//         for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//         count++;
//         }
//         }
//         if(count===0){
//         return true
//         } else{
//         return false
//         }
//         }
// var n  = isPrime(9)
// console.log(n)
//         var howManyPrime = 0;
//         for (let i = 0; i < arr.length; i++) {
//         let check = isPrime(arr[i])

//         if (check ===true && arr[i]>1) {
//         howManyPrime++;
//         }
//         }
//         console.log(`There are ${howManyPrime} Prime Number.`);

// var arr = [3, 5, 9, 7, 11, 13,1];
// function prime_check(num) {
//   let count = 0;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let countPrime = 0;
// for (let i = 0; i < arr.length; i++) {
//   let ans = prime_check(arr[i]);
//   if (ans == true && arr[i]>1) {
//     countPrime++;
//   }
// }
// console.log(countPrime);







// count of prime number in array
var arr = [3, 5, 7, 11, 13, 19, 23, 29, 1231];
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

let countPrime_no = 0;
for (let i = 0; i < arr.length; i++) {
  let res = primeNo_checked(arr[i]);
  if (res == true) {
    countPrime_no++;
  }
}
console.log(countPrime_no);

// CHECK PRIME NUMBER 1 T0 100
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

var n = 100;
var arr = [];
for (var i = 0; i <= n; i++) {
  if (primeNo_checked(i)) {
  arr.push(i);
  }
}
console.log(arr);

// Sum of Prime..........................
function isPrime(num) {
  var count = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}
 
var arr1 = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 2; i < arr1.length; i++) {
  if (isPrime(arr1[i])) {
    sum += arr1[i];
  }
}
console.log(sum);