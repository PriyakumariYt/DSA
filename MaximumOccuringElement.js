// var arr = [0, 3, 3, 6, 9];
// function maximumOccurringElement(arr) {
//   var res = 0;
//   var ans = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count = arr[i];
//         res = arr[i];
//       }
//     }
//     if (arr[i] > res) {
//       ans = res;
//     }
//   }
//   console.log(ans);
// }
// maximumOccurringElement(arr);



var arr = [0, 3,3,6,9]
function maximumOccurringElement(arr){
    var res = 0
    var ans  = -1
    for(let i = 0; i<arr.length; i++){
        let count = 1
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                count++
            
            }
        }
        if(count>res){
            res = count
            ans = arr[i]
        }
    }
    console.log(ans)
    return;
    
}



function runProgram(input) {
    input = input.split("\n");
    let data = input[1].split(" ").map(Number);
    //findMaximun(data)
    maximumOccurringElement(data)
}

if (process.env.USERNAME === "Amarjeet") {
  runProgram(`5
0 2 0 6 9`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}