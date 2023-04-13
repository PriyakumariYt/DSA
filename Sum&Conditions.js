var arr = [21, 24, 2, 54, 8]
var sum = 0
for(let i = 0; i<arr.length; i++){
    sum+= arr[i]
}
if(sum>100){
    console.log("greater")
}else{
    console.log("lesser")
}