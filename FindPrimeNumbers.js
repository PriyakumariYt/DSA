var a = 2;
var b = 11;
var res = "";
for (let i = a; i <= b; i++) {
  var prime = 1;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      prime++;
    }
  }
  if (i > 1 && prime == 1) {
    res += i + " ";
  }
}
console.log(res);
