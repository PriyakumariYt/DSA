var arr1 = [4,5,7,3]
var arr2 = [9,2,5,3]
let res = ""
for(let i = 0; i<arr1.length; i++){
    for(let j = 0; j<arr2.length; j++){
        if(arr1[i] ===arr2[j]){
res+= arr1[i] + " "
        }
    }
}
console.log(res)
