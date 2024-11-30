//****************** Task no 1 : Even Number Find *****************************
// var numbers = [11,3,4,8,9];
// var evenNumber  = numbers.filter(function (number){
//    return number % 2 !== 0;
// });
// console.log(evenNumber);

//****************** Task No 2 : Filter out student's which have substring "an"; *****************************

// var names = ["rizwan","salman","karim","faizan"];

// var filteredStudent = students.filter(function(student){
//     return student.includes("an");
// });
// console.log(filteredStudent);


// ************** Task no 3 : Remove Duplicate number ***************************** 

// var numbers = [1,5,4,3,5,1,5,5,7,1,8];

// var newNum = numbers
// console.log(newNum)
// for(var i = 0; i < numbers.length; i++ ){
//    if(numbers[i] === 5){
//         numbers.map(function(value){
//             value = ""; 
//         })
//         console.log(numbers)
//    }
// }

// ****************** Task no 4 : Convert the number to given saturday , sunday using Switch Case *****************************

// var dayNumber = +prompt("Enter the number which Day you want !! range is 0 - 6 : ");
// // var dayNumber =4;
// var daysName = new Date().getDay();
// switch (daysName) {
//     case 1:
//         // daysName = "Sunday";
//         alert("Sunday");
//         // break;
//     case 2:
//         // daysName = "Monday";
//         alert("Monday")
//         // break;
//     case 3:
//         // daysName = "Tuesday";
//         alert("Tuesday")
//         // break;
//     case 4:
//         // daysName = "Wednesday";
//     //     break;
//     // case 5:
//     //     daysName = "Thursday";
//     //     break;
//     // case 6:
//     //     daysName = "Friday";
//     //     break;
//     // case 7:
//     //     daysName = "Saturday";
//     //     break;
//     default:
//         daysName = "!Invalid";
// }
// alert(daysName)


// ************ Task no 5 : ***************

let arr = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9];
let sum = 10;
console.log(ab(arr, sum));

function ab(arr, sum) {
    let b = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === sum) {
                b.push([arr[i], arr[j]]);
            }
        }
    }
    
    return b;
}
  
// ************ Task no 6: ***************

