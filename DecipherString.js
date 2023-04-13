var str = "a4b6c2d1"
var newStr = ""
for(let i = 0; i<str.length; i++){
        for(let j = 0; j<str[i]; j++){
                newStr+= str[i-1]
        }
}
console.log(newStr)