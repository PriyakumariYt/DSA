var mat = [
        [1, 8, 9],
        [2, 7, 10],
        [3, 6, 11],
        [4, 5, 12]
]

var bag = ""
for(let j = 0; j<mat[0].length; j++){
        for(let i = mat.length-1; i>=0; i--){
                bag+= mat[i][j] + " "
        }
}
console.log(bag)