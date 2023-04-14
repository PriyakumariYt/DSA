var n = 5;
var mid = Math.floor(n / 2);
//console.log(mid)
for (let i = 0; i < n; i++) {
  let res = "";
  for (let j = 0; j < n; j++) {
    if (i == 0 || j == mid) {
      res += "* ";
    } else {
      res += "  ";
    }
  }
  console.log(res)
}
