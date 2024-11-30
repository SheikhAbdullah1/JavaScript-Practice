// Task # 1 : Display username in lowerCase an alert

// let userName = prompt("Enter your name:");
// let lowerCase = userName.toLowerCase();
// alert(lowerCase);
// console.log(lowerCase);

// let username = prompt("Enter your name", "ShAiKh AbduLLah");
// username = "shaikh abdullah";
// alert(username);

// Task # 2 : Array Operations

// let colors = ["Blue", "Green" , "Red" , "Purple" , "Black"];
// console.log(colors);

// a) Add color to the beginning

// 1)
// let begnningAddColor = prompt("Enter color do you want to add beginning of an array:");
// colors.unshift(begnningAddColor);
// alert(colors);
// console.log(colors);

// 2)
// firstColor = prompt("Which color do you want to add beginning of an array?", "Grey");
// colorName.unshift("Grey");
// console.log(colorName);
// alert(colorName);

// b) Add color to End of an array

// 1)
// let endAddColor = prompt("Enter color do you want to add end of an array:");
// colors.push(endAddColor);
// alert(colors);
// console.log(colors);
 
// 2)
// firstColor = prompt("Which color do you want to add end of an array?", "White");
// colorName.push("White");
// console.log(colorName);
// alert(colorName);

// c) Add two more color the beginning of an array

// 1)
// colors.unshift("Orange" , "Gray");
// alert(colors);
// console.log(colors);

// 2
// firstColor = prompt("Which color do you want to add beginning of an array?","Brown , Orange");
// colorName.unshift("Orange", "Brown");
// console.log(colorName);
// alert(colorName);

// // d) Delete the first color of an array

// 1)
// colors.shift();
// alert(colors);
// console.log(colors);

// 2)
// firstColor = prompt("Which color do you want to delete beginning of an array?" , "Grey");
// colorName.shift("Grey");
// console.log(colorName);
// alert(colorName);

// e) Delete last color of an array

// 1)
// colors.pop();
// alert(colors);
// console.log(colors);

// 2)
// firstColor = prompt("Which color do you want to delete End of an array?" , "White");
// colorName.pop("White");
// console.log(colorName);
// alert(colorName);

// f) Add colors to a index

// 1)
// let addToIndex = +prompt("Enter the index to add color:");
// let colorIndexAdd = prompt("Enter the color name");
// colors.splice(addToIndex , 0 ,colorIndexAdd);
// alert(colors);
// console.log(colors);

// 2)
// firstColor = prompt("Which index do you want to add color on an array?", "3");
// colorName.splice(3);
// alert(colorName);
// console.log(colorName);


// g) Remove color of a index
// let deleteToIndex = +prompt("Enter the index to delete color:");
// let numOfDeleteColor = prompt("Enter the number of color to delete of an index :");
// colors.splice(deleteToIndex , numOfDeleteColor);
// alert(colors); 
// console.log(colors);

// colorName.push("Pink")               //  End say Enter
// colorName.pop()                      //  End say Remove
// colorName.shift("SkyBlue")           //  Start say remove
// colorName.unshift("LightGreen")      //  Start say Enter
// colorName.splice(0 , 3)              //  Array / Index Element ko hatany kay liya
// var colorNames = ["hello" , "Hy" , "By" ]
// colorName.slice( 1 , 2 , 4);
// alert(colorName);



// Task # 3 : Write two dimensional for a loop method  

// let sizeMatrix = prompt("Enter the size of matrix?");
// let n = parseInt(sizeMatrix);

// let identifyMatrix = [];

// for(let i = 0 ; i < n ; i++){
//     let row = [];
//     for(let j = 0 ; j < n ; j++){
//         if(i === j){
//             row.push(1);
//         }
//         else{
//             row.push(0);
//         }
//     }
//     identifyMatrix.push(row);
// }
// for(let i = 0 ; i < n ; i++){
//     document.write(identifyMatrix[i].join(""));
//     document.write("<br>");
// }
    
// function generateMatrix(){
//     for(var i = 0 ; i <= 3; i++){
//         var pattern = "";
//         for(var j = 1; j <= 3; j++){
//             if(i==j){
//                 pattern = pattern + "" + 1;
//             }
//             else{
//                 pattern = pattern + "" + 0;
//             }
//         }
//     }
// }
// console.log(generateMatrix(4));
// Task # 4 : Write a loop program 

// a)
// let pattern = "";
// for(let i = 1 ; i <= 5 ; i++){
//     for(let j = 1; j <= 5 -i + 1; j++){
//         document.write(j);
//     }
//     document.write("<br>");
// }

// // b)
// let pattern2 = "";
// for(let i = 1 ; i <= 5 ; i++){
//     for(let j = 1; j <= 5 -i + 1; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }


// Task # 5 : Word Hyder To replace Islam

// let dummyCity = prompt("Enter your city" , "Hyderabad");
// let replaceCity = dummyCity.replace("Hyder" , "Islam");
// alert(replaceCity);
// console.log(replaceCity);

// let cityName = prompt("Enter city name" , "Hyderabad");
// cityName = "islamabad";
// alert(cityName);
// console.log(cityName);