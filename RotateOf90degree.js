var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

for (let i = arr.length - 1; i >= 0; i--) {
  let bag = "";
  for (let j = 0; j < arr[0].length; j++) {
    bag = bag + arr[j][i] + " ";
  }
  console.log(bag);
}
