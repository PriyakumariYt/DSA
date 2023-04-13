var arr = [0, 1, 0, 1, 1, 1, 0, 2, 2, 0];
let zero = 0;
let one = 0;
let two = 0;
//let str = ""
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
console.log(zero, one, two);
