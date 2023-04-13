var str = "A Transformation in education"
let res  = ""
let arr = str.split(" ")
for(let i = arr.length-1; i>=0; i--){
        res+= arr[i] + " "
}
console.log(res)