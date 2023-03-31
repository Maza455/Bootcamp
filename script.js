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


// function submit() {
//     let num = document.querySelector('.number').value;

// //check if the number is even
// if(num % 2 == 0) {
//     alert("The number is even.");
// }

// // if the number is odd
// else {
//     alert("The number is odd.");
// }
//     }

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

// Array --> List
// let numbers = [2,9,11,7,5,3,4,8,15,17,19,25,28,45]
// console.log(numbers.length)
// for (let i = 9; i >= 9; i++) {
//         console.log(i)
// }
// console.log(numbers[0]);


// let numbers = [2, 9, 11, 3, 7, 5, 13, 4, 8, 15, 17, 19, 25, 28, 32, 45, 64, 72, 81, 99.]
// for (let i = 0; i <= numbers.length ; i+=1) {
//     if (numbers[i] % 2 == 0) {
//         console.log("Hello, " + numbers[i] + " is Even number");
//     } 
// }

// let colors = ['White', 'Indigo', 'Light_Black'];
// for (const color of colors){
//     console.log(color);
// }

// let people = [
//     {name: 'John', age: 23}, 
//     {name: 'Andrew', age: 3}, 
//     {name: 'Peter', age: 8}, 
//     {name: 'Hanna', age: 14}, 
//     {name: 'Adam', age: 37}];

// let anyYouth = people.some(person => person.age >= 18);
// console.log(anyYouth); // true




// FizzBuzz 

for (var i = 1; i < 16; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz"); // we have an if nested within our for loop, we have used the % (The modulus operator returns the remainder of an integer division) hence we use it to check if a number is divisible by 15.
    
    } else if (i % 3 == 0) {
        console.log("Fizz");

    } else if (i % 5 == 0) {
        console.log("Buzz");

    } else 
    console.log(i);
}

// for (let i = 0; i < 100;) 
//     console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)



// let testNames = ['Zukisa', 'Harry Potter', 'Smallz','', 'Ragnar', 'Scofield', 'Spikjo', 'Newtons']
//   let getInitials = (fullName) => {
//     let allNames = fullName.trim().split(' ');
//     let initials = allNames.reduce((acc, curr, index) => {
//       if(index === 0 || index === allNames.length - 1){
//         acc = `${acc}${curr.charAt(0).toUpperCase()}`;
//       }
//       return acc;
//     }, '');
//     return initials;
//   } 
//   console.log(testNames.map(getInitials));



// const array1 = [1, 2, 3];
                
//         const array2 = [11, 22, 33];

//                 const mixedArray = []

//                 mixedArray.push(array1[0],array2[0],array1[1],array2[1],array1[2],array2[2])
                
//                 console.log(mixedArray);              
//  console.log(" ")



 // frame
//  function frame(arr) {
//     function fill (str, length, char) {
//         return (str.length < length) ? fill(str + char, length, char) : str;
//     }

//     let size = arr.map((str) => {
//             return str.length;
// })
// .reduce((a, b) => {
//         return Math.max(a, b);
// });

//     let line = fill('', size + 4, '*');

//     arr = arr.map((element) => {
//             return '* '+ fill(element, size, ' ') + ' *';
// })
//     arr.unshift(line);
//     arr.push(line);

//     return arr.join('\n');
// }

// console.log(frame(["Write", "good", "code", "every", "day"]));


// // FRAME SOME TEXT 

// function longestWord(str) {
//     let words = str.split(" ");
//     let size = 0;
//     let max = [""];

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length >= size) {
//             size = words[i].length;
//             if (max[max.length - 1].length < words[i].length) {
//                 max = [];
//                 max.push(words[i]);
//             } else {
//                 max = [...max, words[i]];
//             }
//         }
//     }

//     return [...max];
// }

// console.log(longestWord("the quick brown fox ate my chickens"));

// console.log(" ")

// console.log(longestWord("once upon a time"));
 
// console.log(" ")




//* EVEN OR ODD 

// function evenOrOdd(number) {
//     if (number % 2 == 0) {
//         return "even";
//     } else {
//         return "Odd";
//     }

// }
// console.log(evenOrOdd(5));

// console.log(" ")



// let Arr = [20, 311, 12, 11, 13, 15, 4, 0, 10]
// function splitOddAndEven(numbers) {
//     let odd = [];
//     let even = [];
  
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 === 0) {
//         // number is even
//         even.push(numbers[i]);
//       } else {
//         // number is not even (=odd)
//         odd.push(numbers[i]);
//       }
//     }
  
//     // create an object with the odd and even array in it
//     let myArr = {
//       odd,
//       even,
//     };
  
//     return myArr;
//   }

//   console.log(splitOddAndEven(Arr));
