var num = 13;
function checkPrime(num) {
  var count = 0;
  for(let i = 2; i<num; i++){
        if(num%i ==0){
                count++
        }
  }
  if(count==0){
        return true
  }else{
        return false
  }
}
var n = checkPrime(num)
console.log(n)
