var arr = [1, 2, 3, 4, 5,6];
let sumOfPairArray =  []
var count = 0
for(let i = 0 ;i<arr.length; i++){
    count+= arr[i]
    if(i%2!==0){
       sumOfPairArray.push(count)
        count = 0
    }
    
}
// console.log(sumOfPairArray.reduce((a,b)=>{
//     return a*b
// },1))


