var n = 5
for(let i = 1; i<=n; i++){
        let ans = ""
        for(let j = 1; j<=n; j++){
                if(i===1||j==n|| i==n){

                        ans+= "* "
                }else{
                        ans+= "  "
                }
        }
        console.log(ans)
        }







        
var n = 5;
for (let i = 1; i <= n; i++) {
  let ans = "";
  for (let j = 1; j <= i; j++) {
    if (i%2==0 ) {
      continue;
    }else {
        ans+= "*"
    }
   
  }
  console.log(ans);
}
