// console.log("My name is abdullah");
// document.write("My name is abdullah");
// alert("My name is abdullah");

// variable 
// Old JavaScript

// var abc = 12;
// console.log("abc", abc);  

// New Javascript Es-6

// let abc = 13;
// abc = 20;
// console.log("let" ,abc);

// const abc = 14;
// console.log("const" ,abc);

// true or false
// undefined
// NaN
// String
// Number

// var a = 10;
// var b = 5;
// var c = b + a;

// c += a; 
// console.log(c);

// function addition(){
//     console.log("The answer is : ", a + b);
// }

// addition();

// console.log(c);

var a = +prompt("Abc ");
var c = prompt("abc"); 
var b = +prompt("Abc ");
function plus(){
    if (c && a+b){
       document.write("The addition of a and b is: ", a + b);
    } 
    else if (c && a-b) {
       document.write("The subtraction of a and b is: ", a - b);
    }
    else if (c && a*b) {
       document.write("The multiplication of a and b is: ", a * b);
    }
    else if (c &&a/b) {
       document.write("The multiplication of a and b is: ", a / b);
    }
}
plus();