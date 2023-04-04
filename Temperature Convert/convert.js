// function convertToF(celsius) {
    
//     let fahrenheit = celsius * 9/5 + 32
//     // return the variable fahrenheit
//     return fahrenheit;
//   }
  
//   console.log(convertToF("less than :" + 21));

// // 2nd convert ...
//    function convertToC(fahrenheit) {
    
//      let celsius = (fahrenheit - 32) * 5/9
//         if (celsius < 16){
//          console.log("It's cold, wear Jacket:");
//      } else if ( celsius >= 16 && celsius < 21 ){
//         console.log("It is warm, wear T-shirt & Jeans:")
//      } else {
//          console.log("It is hot, wear shorts:")
//      }
//       // return the variable celsius
//     return celsius;

//     }
  
//    console.log(convertToC(64));


function calculateTemp() {
    function celToFah(celsius) {
       var fahrenheit = Math.round((celsius * (9/5)) + 32);
       return fahrenheit;
    }
 
    function fahToCel(fahrenheit) {
       var celsius = Math.round((fahrenheit - 32) * (5/9));
       return celsius;
    }
 
    // Checks if Calsius or Fahrenheit is selected
    var tempSelected = document.getElementById("temp_diff");
    var valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
 
    // Checks the value inside the Temperature input
    var numberTemp = document.getElementById("temp").value;
 
    var result;
    
    if (valueTemp == 1) {
       result = celToFah(numberTemp);
       document.getElementById("resultContainer").innerHTML = "= " + result + "°Fahrenheit";
    } else {
       result = fahToCel(numberTemp);
       document.getElementById("resultContainer").innerHTML = "= " + result + "°Celsius";
    }
    
 }












// Other way of converting temperature
// function cToF(celsius) 
// {
//   let cTemp = celsius;
//   let cToFahr = cTemp * 9 / 5 + 32;
//   let message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   let fTemp = fahrenheit;
//   let fToCel = (fTemp - 32) * 5 / 9;
//   let message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
//     console.log(message);
// } 
// cToF(60);
// fToC(45);