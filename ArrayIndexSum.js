var arr = ["123", "456", "6987", "45698"];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    sum = sum + +arr[i][j];
  }
  console.log(sum)
}
var arr = []
var str = ""
for(let i = 1; i<=10; i++){
  str+= i
  arr.push(str)
}
console.log(arr)