var checkPowerTwo = function (num) {
  var res = 0;
  var ans = "YES";
  if (num != 1) {
    var i = 0;
    while (i < num) {
      res = num / 2;
      if (res != 1) {
        num = res;
        if (res % 2 != 0) {
          var ans = "NO";
          break;
        }
      }

      i++;
    }
  }
  console.log(ans);
};

function power_of_Two(num) {
  var res = 0;
  var ans = "yes";
  if (num != 1) {
    var i = 0;
    while (i < num) {
      res = num / 2;
      if (res != 1) {
        num = res;
        if (res % 2 != 0) {
          var ans = "no";
          break;
        }
      }
      i++;
    }
  }
  console.log(ans);
}

//power_of_Two(100)

function checkPower(num) {
  var res = 0;
  var ans = "yes";
  for (let i = 0; i < num; i++) {
    if (num != 1) {
      res = num / 2;
      if (res != 1) {
        num = res;
        if (res % 2 != 0) {
          ans = "no";
          break;
        }
      }
    }
  }
  console.log(ans);
}
//checkPower(100);

function power_check(num){
  var res = 0
  var ans = "yes"
  for(let i = 0; i<num; i++){
    if(num!=1){
      res = num/2;
      if(res!=1){
        num = res
        if(res%2!=0){
          ans = "no"
          break;
        }
      }
    }
  }
  console.log(ans)
}
power_check(2)


