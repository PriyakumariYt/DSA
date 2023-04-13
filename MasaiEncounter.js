var str = "aaabccddd";
var res = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    i = i + 1;
  } else {
    res += str[i];
  }
}
if(res.length==0){
  console.log("empty")
}{
  console.log(res);

}
