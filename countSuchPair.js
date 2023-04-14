var n = [3,0,6,2,7]
var target = [5,9]
var count = 0;
     for(let i=0;i<n;i++){
         for(let j=i+1;j<n;j++){
             let  sum = n[i]+ n[j];
             if(sum==target[i]){
                 count++;
             }
         }
     }
 console.log(count);
