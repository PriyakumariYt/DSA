var n =11;
var mid = Math.floor(n / 2);
for (let i = 0; i < n; i++) {
  let ans = "";
  for (let j = 0; j < n; j++) {
    if (
      j === 0 ||
      j == n - 1 ||
       (i + j === n - 1 && i <= mid) ||
       (i === j && i <= mid)
    ) {
      ans += "* ";
    } else {
      ans += "  ";
    }
  }
  console.log(ans);
}
