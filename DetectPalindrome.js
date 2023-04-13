var data = "1221"
function detect_palindrome(num){
    var rev = ""
    for(let i = data.length-1; i>=0;i--){
        rev+= data[i]
    }

    if(rev == data){
        console.log("yes")
    }else{
        console.log("no")
    }
}
detect_palindrome(data)