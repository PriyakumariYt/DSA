var arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      
    
      
      for(let i = arr[0].length-1; i>=0; i--){
          let bag = ""
          for(let j= arr.length-1; j>=0; j--){
              bag = bag + arr[i][j] + " "
          }
          console.log(bag)
      }