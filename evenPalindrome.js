 

var data = "abcdcfa"
var data1 = "priyakumari"

function checkPalidrome(res) {
let bag = ""
for(let i=res.length-1;i>=0;i--){
    bag+= res[i]
}if(res==bag){
    return  "yes"
}else{
    return "No"
}

}
let res = ""
for(let i=0;i<data.length;i++){
    if(i%2==0){
res+= data[i]
    }
}
 let y = checkPalidrome(res)
 console.log(y)
