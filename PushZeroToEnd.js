var arr = [0,1,2,3,0]
var arr1 = [0, 0, 1, 2, 3]
var arr3 =[1,2,1,2,1,1,1]
function pushZeroToEnd(arr){
var res = ""
var countZero = ""
for(let i = 0; i<arr.length; i++){
    if(arr[i]>0){
    res+= arr[i] + " "
    }else{
        countZero+= arr[i] + " "

    }
}
console.log(res + countZero)

}

pushZeroToEnd(arr3)
