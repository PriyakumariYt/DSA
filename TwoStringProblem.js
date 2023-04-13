var str = "masai"
var str2 = "sai"
var result = false
for(let i = 0; i<str.length; i++){
var ans = ""
    for(let j = i; j<str.length; j++){
        ans += str[j]
    if(ans==str2){
        result = true
    }
    }
}
if(result){
    console.log("yes")
}else{
    console.log("no")
}


