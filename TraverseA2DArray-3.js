var mat = [
        [1, 8, 9],
        [2, 7, 10],
        [3, 6, 11],
        [4, 5, 12]
]

var bag = ""
for(let j = mat[0].length-1; j>=0; j--){
        for(let i = 0; i<mat.length; i++){
                bag+= mat[i][j] + " "
        }
}
console.log(bag)