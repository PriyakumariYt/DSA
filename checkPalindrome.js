//check palindrome
var str = "naman";
var rev = "";
let ans = "no";
for (let i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i];
}
if (rev === str) {
  ans = "yes";
}
console.log(ans);

function checkPalindrome(str) {
  return str.trim() === str.split("").reverse().join("").trim();
}
//console.log(checkPalindrome("naman"))
var arr = ["naman", "chotur", "golu", "mom", "dad"];
var store = [];
for (let i = 0; i < arr.length; i++) {
  let isPalindrome = checkPalindrome(arr[i]);
  if (isPalindrome) store.push(arr[i]);
}

//console.log(isPalindrome)

var filterPlaindrome = arr.filter(function (elem) {
  return checkPalindrome(elem);
});
console.log(filterPlaindrome);
