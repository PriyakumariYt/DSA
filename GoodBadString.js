var str = "ababa";
var str2 = "abb";
var str3 = "aaab";
function good_Bad_String(str) {
  var res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      res += str[i];
    }
  }
  console.log(res);
}
 good_Bad_String(str3);
