var num = 4;
let count = 0;
for (let i = 0; i < num; i++) {
  let ans = "";
  let right = num * 2;
  for (let j = 0; j < num; j++) {
    if (i === j) {
      ans += "* ";
    } else ans += "  ";
    count++;
  }
  for (let j = num + 1; j < right; j++) {
    if (i + j === right - 1) {
      ans += "* ";
    } else ans += "  ";
    count++;
  }
//   console.log(ans);
}
//SECOND WAY

var n = 5;
// var mid = Math.ceil(n / 2);

for (let i = 0; i < n; i++) {
  let res = " ";
  for (let j = 0; j < n; j++) {
    if (j - i / 2 == 0 || j + i / 2 == n - 1) {
      res += "* ";
    } else {
      res += "  ";
    }
  }
  console.log(res);
}