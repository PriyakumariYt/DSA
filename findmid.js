var arr = [1, 2, 3, 4, 6, 5, 4, 2];
var arr2 = [1, 2, 44, 6, 8, 5, 6];
var mid = Math.floor(arr2.length / 2);


function find_mid_sum(arr) {
  var first = 0;
  for (let i = 0; i < mid; i++) {
    first = first + arr[i];
  }
  //console.log(first);
  var last = 0;

  for(let i = mid; i<arr.length; i++){
          last = last + arr[i]
          }
        //   console.log(last)
          if(first>last){
                  console.log("first is bigger then last")
          }else{
                  console.log("last is bigger then first")
          }
}
find_mid_sum(arr)
find_mid_sum(arr2)