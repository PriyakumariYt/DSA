var str = "aBbcd"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var res = ""
for(let i = 0; i<str.length;i++){
    for(let j = 0; j<upper.length; j++){
        if(str[i]==upper[j]){
            res+= lower[j]
        }else if(str[i]==lower[j]){
            res+= upper[j]
        }
    }
}
console.log(res)