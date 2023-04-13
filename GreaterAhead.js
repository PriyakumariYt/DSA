var arr = [1, 4, 2, 3, 5]
var arr2 = [5,4, 3, 2, 1]
function greaterAhead(arr){
var greater = 0
for(let i = 0; i<arr.length; i++){
    if(arr[i]> arr[i+1]){
        greater++
    }
}
console.log(greater)
}

greaterAhead(arr2)
