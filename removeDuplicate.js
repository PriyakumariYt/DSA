
var arr = [1,1,2,2,3]


const  removeDublicate = (arr) => {
  if (arr.length <= 1) return arr.length;
  var count = 0;
  var res = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      count++;
      res += arr[i] + " ";
    }
  }
     return res ;

    
//   console.log(count);
};


var res = removeDublicate(arr)
console.log(res)

var arr1 = [1, 2, 3, 3,6, 3, 4,4,5,5,4,4]
function removeDuplicate(arr) {
    //  if (arr.length <= 1) return arr.length;
var arr = arr1.sort()
    var count = 0
    var res = ""
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== arr[i + 1]) {
            count++;
            res+= arr[i] + " "
        }
    }
    return res
}
var ans = removeDuplicate(arr1)
console.log(ans)
