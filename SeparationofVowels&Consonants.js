var str = "rutwik"
var vowel= ""
 var consonant = ""

for(let i = 0; i<str.length; i++){
    if(str[i]==="a"|| str[i]==="e"|| str[i]==="i"|| str[i]==="o"|| str[i]==="u"){
        vowel+= str[i]
    }else{
        consonant+= str[i]
    }
}
// var ans = vowel.concat(consonant)

//  console.log(ans)
console.log(vowel+consonant)
