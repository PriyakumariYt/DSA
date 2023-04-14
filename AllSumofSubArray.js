
var arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
  var sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum = sum + arr[j];
    console.log(sum)
  }
}
