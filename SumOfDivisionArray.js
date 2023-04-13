var arr = [1, 2, 3, 4, 5, 6]
var sumOfDivisionArray = []
var count = 1
for(let i = 0; i<arr.length; i++){
    count *= arr[i]
    if(i%2!==0){
        sumOfDivisionArray.push(count)
        count = 1
    }
}
console.log(sumOfDivisionArray)
console.log(sumOfDivisionArray.reduce((a,b)=>{
    return a+b
},0))
