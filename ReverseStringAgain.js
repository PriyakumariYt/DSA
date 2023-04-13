var str = "hello  world"
var str1 = "hi there"
var str2 = "a  b"
function reverseStringAgain (str){
var string =str.split(" ").reverse().join(" ")
var rev = ""
for(let i = string.length-1; i>=0; i--){
    rev+= string[i]
}
return rev
}
var ans = reverseStringAgain(str)
console.log(ans)
