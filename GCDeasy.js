
var num = 51;
var num1 = 68;
function gCD(num, num1) {
  var ans1 = [];
  var ans2 = [];
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      ans1.push(i);
    }
  }

  for (let i = 0; i < num1; i++) {
    if (num1 % i == 0) {
      ans2.push(i);
    }
  }
  var res = "";
  for (let i = ans1.length - 1; i >= 0; i--) {
    for (let j = ans2.length-1; j >= 0; j--) {
      if (ans1[i] == ans2[j]) {
        res += ans1[i] + " ";
        break;
      }
    }
  }
  var newAns = res.split(" ");
  console.log(newAns[0]);
  
}
gCD(num,num1)