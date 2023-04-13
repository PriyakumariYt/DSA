var arr = [-2, 0, 8, 4]
var largest = -Infinity
var smallest = Infinity
for(let i = 0; i<arr.length; i++){
        if(arr[i]>largest){
                largest = arr[i]
        }
        if(arr[i]<smallest){
                smallest = arr[i]
        }
}
console.log(smallest)
console.log(largest)