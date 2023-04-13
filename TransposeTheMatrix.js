var arr = [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3],
        [4, 4, 4, 4]
        ];
        let row = arr.length
        let cols = arr[0].length
         for(let i = 0; i<cols; i++){
                 let bag = ""
    
                 for(let j = 0; j<row; j++){
                bag = bag + arr[j][i] + " "
                 }
                 console.log(bag)
         }
    
    