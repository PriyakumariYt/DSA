var trucks = [1, 2, 3, 4];
var truck_combined = 0;
weight_of_single_truck = 6;
for (let i = 0; i < trucks.length; i++) {
  truck_combined += trucks[i];
  var weight_of_bricks = truck_combined * weight_of_single_truck;
}
console.log(weight_of_bricks);
