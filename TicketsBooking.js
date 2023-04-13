var ticket_booking = [5, 6, 2];
var ticket_price = [1200, 1400, 2000];
var sum = 0;
for (let i = 0; i < ticket_price.length; i++) {
  var mult = ticket_booking[i] * ticket_price[i];
  sum += mult;
}
console.log(sum);

