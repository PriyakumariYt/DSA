function find_ascii() {
  var obj = {};
  var first = 97;
  var last = 97 + 25;
  var count = 0;
  for (let i = first; i <= last; i++) {
    let key = String.fromCharCode(first);
    first++;
    count++;
    obj[key] = count;
  }
  return obj;
}
var ascii = find_ascii();
function ascii_value_sum(object, string) {
  var sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum = sum + object[string[i]];
  }
  return console.log(sum);
}
//ascii_value_sum(ascii, "amar");

function find_ascii_number() {
  var obj = {};
  var start = 97;
  var end = 97 + 25;
  var count = 0;
  for (let i = start; i <= end; i++) {
    let key = String.fromCharCode(start);
    start++;
    count++;
    obj[key] = count;
  }
  return obj;
}

var value = find_ascii_number();
//console.log(value)
function find_word_value(obj, str) {
  var sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = sum + obj[str[i]];
  }
  return console.log(sum);
}
find_word_value(value, "amar");
