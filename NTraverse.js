var arr = [
        [1,2,3],   
        [4,5,6],
        [7,8,9]     
    ];
    var row = arr.length;
    var cols = arr[0].length
    var bag = ""
    for(let i = row-1; i>=0;i--){
    bag+= arr[i][0] + " "
    }
    for(let i= 1; i<row; i++){
        bag+= arr[i][i] + " "
    }
    for(let i = row-2; i>=0; i--){
        bag+= arr[i][cols-1] + " "
    }
    console.log(bag);