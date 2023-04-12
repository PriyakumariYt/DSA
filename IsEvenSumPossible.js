//Is Even Sum Possible?

var arr1 = [1, 2, 3, 4]
var arr2 = [5]
function isEvenSum(arr){
for(let i = 0; i<arr.length;i++){
        let sum = 0
        for(let j = i; j<arr.length; j++){
                sum+= arr[j]
                if(sum%2===0){
                        return "yes";
                }
        }
        return "no"
}
}
var x = isEvenSum(arr1)
console.log(x)