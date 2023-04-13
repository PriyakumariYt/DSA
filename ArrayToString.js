var arr = [2, -4, 6, 8, -9]
 var res = "";
  
     for(i=0;i<arr.length;i++){
       if(arr[i]<0){
         res += "0";
       }else {
         res += arr[i];
       }
     }
       console.log(res);
  	 	 