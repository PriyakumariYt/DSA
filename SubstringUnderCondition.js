var str = "abcab"
var count = 0
for(let i = 0; i<str.length; i++){
    var res = ""
    for(let j= i; j<str.length; j++){
        res+= str[j]
   // console.log(res)
    if(str[j] == str[str.length-1]){
      count++
    }
   }
 }
 console.log(count)