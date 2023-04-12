var arr = [1]
var arr1 =[1,101]
var arr2 =[1,200]
function oddOfOdd(arr){
var ans = "yes"
var count = 0
for(let i = 0; i<arr.length; i++){
    if(arr[i]%2!==0){
        count++
    }
}
if(count%2==0){
    ans = "no"
}
console.log(ans)
}
oddOfOdd(arr)
oddOfOdd(arr1)
oddOfOdd(arr2)
