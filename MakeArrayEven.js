var arr = [1, 2, 3]
var arr = [2]
function makeArrayEven(arr){
var sum = 0
let ans = "no"
for(let i = 0; i<arr.length; i++){
    sum+= arr[i]
if(sum%2==0){
    ans = "yes"
}
}
console.log(ans)
}
makeArrayEven(arr)