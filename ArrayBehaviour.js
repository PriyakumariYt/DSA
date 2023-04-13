var arr = [1, 3, 3, 4, 5,6]
var arr2 = [1,2,3,4,5]
function array_behaviour(arr){
        var res = "behave"
        for(let i = 0; i<arr.length-2; i++){
                if(arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]%2!=0){
                        res = "misbehave"
                }
        } 
        console.log(res)
}
array_behaviour(arr)


var arr = [1,2,3,4,5]
var ans = "behave"
for(let i = 0; i<arr.length-2; i++){
    if(arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]%2!=0){
        ans = "misbehave"
    }
}
console.log(ans)