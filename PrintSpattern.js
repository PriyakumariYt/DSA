var n = 5;
for (let i = 0; i < n; i++) {
  let res = "";
  for (let j = 0; j < n; j++) {
    if (i == 0 || i == j || i == n - 1) {
      res += "* ";
    } else {
      res += "  ";
    }
  }
  console.log(res)
}
