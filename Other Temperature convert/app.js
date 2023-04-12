// function convertToF(celsius) {
    
//     let fahrenheit = celsius * 9/5 + 32
//     // return the variable fahrenheit
//     return fahrenheit;
//   }
  
//   console.log(convertToF("less than :" + 21));

// 2nd convert ...
   function convertToC() {
    
    let fahrenheit = document.querySelector('.celsius').value;
     let celsius = (fahrenheit - 32) * 5/9
        if (celsius < 16){
         alert("It's cold, wear Jacket:");

     } else if ( celsius == 16 && celsius == 21 ){
        alert("It is warm, wear T-shirt & Jeans:")

     } else if ( celsius < 21 || celsius <= -21 ){
        alert("It is extremely cold, wear your winter clothes")
        
     } else {
         alert("It is extremely hot, wear shorts: And play cool")
     }
      // return the variable celsius
    return celsius;

    }
  
//    console.log(convertToC(64));