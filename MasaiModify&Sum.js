var arr = [1,2,3,4,5]
var even = 0
var odd= 0

for(let i = 0; i<arr.length; i++){
        if(i%2==0){
                even+= arr[i]*2
        }else{
                odd+= arr[i]*3
        }
}
console.log(even+odd)
