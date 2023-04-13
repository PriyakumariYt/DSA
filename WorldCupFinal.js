var newzealandscore = 241
var newzealand_superover = 15
var newzealand_four = 21
var englandscore = 241
var england_superover = 15
var england_four = 26;
if(newzealandscore == englandscore && newzealand_superover==england_superover){
    if( england_four < newzealand_four){
        console.log("new zealand")
    }else{
        console.log("england")
    }
}else if(englandscore==newzealandscore) {
  if(england_superover < newzealand_superover){
    console.log("new zealand")

  }else{
    console.log("england")
}
}
else 
{
    if (englandscore < newzealandscore) {
      console.log("New Zealand");
    } else {
      console.log("England");
    }
  }




 