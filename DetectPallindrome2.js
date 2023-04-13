

var checkPossiblePallindrome = function (arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  var res = [];
  for (key in obj) {
    res.push(obj[key]);
  }
  var count = 0;
  for (var i = 0; i < res.length; i++) {
    if (res[i] % 2 != 0) {
      count++
    }
  }

  if (count == 1 || count == 0) {
    console.log("Possible!");
  } else {
    console.log("Not Possible!");
  }
};



