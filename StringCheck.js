
var input = "jh52h"
  var num = false;
  var str = false;
  for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) == input[i]) {
      num = true;
    } else if (String(input[i])== input[i]) {
      str = true;
    }
  }
  if (num && str) {
    console.log("alphanumeric");
  } else if (num) {
    console.log("number");
  } else {
    console.log("char");
  }



