var n = 4
for(let i = 1; i<=n; i++){
        let ans = ""
        for(let j = 1; j<=n; j++){
                if(i==1 || j==1|| i==n||j==n){

                        ans+= "* "
                }else{
                        ans+= "  "
                }
        }

        console.log(ans)
        }
        
