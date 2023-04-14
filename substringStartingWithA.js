  let str = "aman"
function substringStartingA(str) {
    

    let count = 0
    for (let i = 0; i < str.length; i++) {
        let bag = ""
        for (let j = i; j < str.length; j++) {
            bag += str[j]
            // console.log(bag)

            if (bag[i] == "a") {
                count++
            }
        }
    }
    console.log(count)
}
substringStartingA(str)