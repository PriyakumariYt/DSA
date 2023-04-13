var arr = [3,4,2,0,1]
var res = -1
for(let i = 0; i<arr.length; i++){
    if(arr[i]==2){
        res = arr[i+1]
    }
}
console.log(res)