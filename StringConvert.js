
var str = "TeStInG";
var upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var lower = `abcdefghijklmnopqrstuvwxyz`;
var res = "";
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < 26; j++) {
    if (str[i] == upper[j]) {
      res += lower[j];
    } else if (str[i] == lower[j]) {
      res += upper[j];
    }
  }
}
console.log(res);

var str = "RefLEctION";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var res = "";
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < 26; j++) {
    if (str[i] === lowerCase[j]) {
      res += upperCase[j];
    } else if (str[i] === upperCase[j]) {
      res += lowerCase[j];
    }
  }
}
console.log(res);