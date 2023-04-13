var str = ["P", "R", "I", "Y", "A","A", "B","Y"];
var result = [];
for (let i = 0; i < str.length; i++) {
  if (!result.includes(str[i])) {
    result.push(str[i]);
  }
}
console.log(result)


var str = "priyapriya"
var obj = {}
for(let i = 0; i<str.length;i++){
  var char = str[i]
  if(obj[char]===undefined){
    obj[char]= 1
  }else{
    obj[char] = obj[char]+ 1
  }
}
for(let s in obj){

  console.log(s, " :",obj[s])
}

var arr = [7,8,8,7,2,3,3,6,5]

var obj = {}
for(let i = 0; i<arr.length; i++){
  var num = arr[i]
  if(obj[num]===undefined){

    obj[num] = 1
  }else{
    obj[num] = obj[num] + 1
  }
}
for(let key in obj){
  console.log(key, " ",obj[key])
}