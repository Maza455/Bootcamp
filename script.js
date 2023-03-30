// let x = 16 + "Volvo";
// console.log(x);
// document.getElementById("demo").innerHTML = x;

// var a = 1;
// console.log(a);

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);

// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// console.log(person);

// let x = "16" + "Volvo";
// console.log(x);

// let a = 16;
// a = 4;
// console.log(a);

// let a = 10;
// let b = 3;
// let c = a % b;
// console.log(c);

// let a = 10;
// if (a > 10){
//     console.log("Greater than a decade");
// } else if (a == 10){
//     console.log("it is a decade");
// } else if ( a < 10 && a >= 0 ){
//     console.log("it is lesser than decade")
// } else {
//     console.log("we cannot have negative years.")
// }

// let num1 = 10;
// let num2 = 10**2;
// let num3 = 10**3;

// // check the condition
// if(num1 > num2 && num1 > num3) {
//     console.log(num1)
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log(num2)
// }
// else {
//     console.log(num3)
// }


// let hour = new Date().getHours();
// if (hour < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(hour)
// let x = 20;
// let y = 40;
// console.log(x,y)

// let z;
// z = x;
// x = y;
// y = z;
// console.log("After swapping:")
// console.log(x,y)

// let a = 1, b = 2;
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
    
// console.log(a);
// console.log(b);

// let a = 10;
// let b = 20;
// let d = 10;
// let c = 70;
// if (c==d && a==c){
//     console.log("True");
// } else {
//     console.log("False");
// }


function submit() {
    let num = document.querySelector('.number').value;

//check if the number is even
if(num % 2 == 0) {
    alert("The number is even.");
}

// if the number is odd
else {
    alert("The number is odd.");
}
    }

// let num = 4;
// let num2 = 3;
// let num3 = 5;
// let num4 = 8;

// //check if the number is even, odd or even nor odd
// if(num % 2 == 0 && num3 % 2 == 0 ) {
//     console.log("The number is even.");
// } else if (num2 % 2 == 1 && num4 % 7 == 1 ) {
//     console.log("The number is odd.");
// } else {
//     console.log("none of this is even nor odd");
// }

// let num = 2**2;
// let num2 = 3;
// let num3 = 5**2;
// let num4 = 8;

// //check if the number is even, odd or even nor odd
// if(num % 2 == 1 || num3 % 2 == 0 ) {
//     console.log("The number is even.");
// } else if (num2 % 3 == 0 || num4 % 4 == 0 ) {
//     console.log("The number is odd.");
// } else {
//     console.log("none of this is even nor odd.");
// }