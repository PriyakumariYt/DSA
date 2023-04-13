var arr1 = [10000,20000, 15000, 5000]
var arr2 = [2,3,4,3]
var res = 0
for(let i = 0 ; i<arr1.length; i++){
    res+= arr1[i] *arr2[i]
}
console.log(res)
if(res>150000){
    console.log("not possible")
}
else{
console.log("possible")
    
}