var arr = [1, 2, 3, 4, 5]
var A = 2
var B = 3
var even = 0
var odd = 0
for(let i = 0; i<arr.length; i++){
    if(arr[i]%2==0){
        even += arr[i]
    }else{
        odd += arr[i]
    }
    var equation = (A * even) + (B * odd)
}
console.log(equation)