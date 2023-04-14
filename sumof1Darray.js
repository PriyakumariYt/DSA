



var arr = [1, 2, 3, 4]
function sumOFArray(arr) {
    

    let res = []
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let current_value = arr[i]
        sum = sum + current_value
        res.push(sum)
    }
    console.log(res)

}
sumOFArray(arr)