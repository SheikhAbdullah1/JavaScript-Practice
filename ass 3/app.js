// // Task 1 : Calculate Student Percentage ;

// function studentPercentage(){
//     let userSubject1 = +prompt("Enter your English Marks :");
//     let userSubject2 = +prompt("Enter your Math's Marks :");
//     let userSubject3 = +prompt("Enter your Islamiat Marks :");
//     let userSubject4 = +prompt("Enter your Urdu Marks :");

//     let sumOftotalMarks = userSubject1 + userSubject2 + userSubject3 + userSubject4;

//     let percentage = sumOftotalMarks * 100 / 400;

//     alert(percentage);
// }
// studentPercentage();

// // Task 2 : Take a single parameter and return its data type ;

// function getDataType() {
//     alert("Hello " + typeof ("Hello"));
//     alert(15 + " " + typeof (15));
//     alert(true + " " + typeof (true));
//     alert({firstName: "shaikh" } + " " + typeof ({ firstName: "shaikh" }));
//     alert(class C { } + " " + typeof (class C { }))
// }

// // Task 3 : Arithemetic Operation ;

// function arithemeticOperation() {
//     let num1 = +prompt("Enter First Value");
//     let arithemeticOperation = prompt("Enter the Operation which wanna perform ? + , - , * , / :");
//     let num2 = +prompt("Enter Second Value");

//     if (arithemeticOperation == "+") {
//         alert(num1 + num2);
//     }
//     else if (arithemeticOperation == "-") {
//         alert(num1 - num2);
//     }
//     else if (arithemeticOperation == "*") {
//         alert(num1 * num2);
//     }
//     else if (arithemeticOperation == "/") {
//         alert(num1 / num2);
//     }
//     else if (arithemeticOperation == "%") {
//         alert(num1 % num2);
//     }
//     else {
//         alert("Enter Value & Sign To Perform Arithemetic Operation (: ")
//     }
// }

// // Task 4 : Write a function for gathering circketer's 

// let nameOfCircketer;
// let Age;
// let team;
// let country;
// let gender;
// let playedInUnder13;
// let playedInUnder19;
// let playedInT20Team;
// let playedInOdiTeam;
// let playedInTeam;
// let totalT20MatchesPlayed;
// let totalT20MatchesPlayedHighScore;
// let totalOdiMatchesPlayed;
// let totalOdiMatchesPlayedHighScore;
// let totalTestMatchPlayed;
// let totalTestMatchesPlayedHighScore;
// let bestScored;

// function getheringCircketerInfo() {

//     nameOfCircketer = prompt("Enter Circketer Name !");
//     Age = +prompt("Enter Circketer Age !");
//     team = prompt("Enter Circketer Team !");
//     country = prompt("Enter Circketer Country !");
//     gender = prompt("Enter Circketer Gender !");
//     playedInUnder13 = prompt("Enter Circketer Playing Under 13 Team Name !");
//     playedInUnder19 = prompt("Enter Circketer Playing Under 19 Team Name!");
//     // playedInTeam = prompt("Enter Circketer Playing Team !");
//     playedInT20Team = prompt("Enter Circketer Playing T20 Team !");
//     playedInOdiTeam = prompt("Enter Circketer Playing ODI Team !");
//     // totalT20MatchesPlayed = +prompt("Enter Circketer Played Total T20 Matches !");
//     // totalT20MatchesPlayedHighScore = +prompt("Enter Circketer Playing T20 Matche Best Score !");
//     // totalOdiMatchesPlayed = +prompt("Enter Circketer Played Total ODI Matches !");
//     // totalOdiMatchesPlayedHighScore = +prompt("Enter Circketer Playing ODI Matche Best Score !");
//     totalTestMatchPlayed = +prompt("Enter Circketer Played Total Test Matches !");
//     // totalTestMatchesPlayedHighScore = +prompt("Enter Circketer Played Test Matche Best Score !");
//     // bestScored = +prompt("Enter Circketer High Score !");
//     let some = nameOfCircketer + Age + team + country + gender + playedInUnder13 + playedInUnder19 + playedInT20Team + playedInOdiTeam + playedInOdiTeam + totalTestMatchPlayed ;
//     if(some){
//         alert(some);
//     }
//     else{
//         alert("Answer the question !")
//     }
// }

// Task 5 : Todo Application

// function todoFunction() {
//     let todo = "";
//     while(todo){
//         todo = +prompt("Enter todo item (: ");
//         todo = todo.push;
//         alert("Add Todo Item");
//     }
//     do{
//         todo = [+prompt("Enter which todo item delete ?")-1]
//         alert("Delete Todo Item");
//     }
// };

// let todo = [];
// function todoFunction() {
//     let operator;
//     do {
//         operator = +prompt("Which Operator do you want to do ?");
//         switch (operator) {
//             case 1:
//                 todo.push(prompt("Enter which you want to add on todo :"));
//                 alert("Add to todo List");
//                 break;
//             case 2:
//                 delete todo[+prompt("Which item do you want to delete ?") - 1];
//                 alert("Item Deleted");
//                 break;
//             case 3:
//                 let sampleString = "";
//                 let indexer = 1;
//                 for (let i = 0; i < todo.length; i++) {
//                     if (todo[i] !== undefined) {
//                         sampleString += i + indexer + "." + todo[i] + "/n";
//                     }
//                     else {
//                         indexer--;
//                     }
//                 }
//                 alert(sampleString);
//                 break;
//             case 4:
//                 break;
//             default:
//         }
//     } while (operator != 4);
// }

// let inputField = document.getElementById("ul-create-list");


// function add(){
//     var add = document.getElementById("todo-App-input");
//     var li = document.createElement("li");
//     var textInsert = document.createTextNode(add.value);
//     li.appendChild(textInsert);
//     inputField.appendChild(li);
//     add.value = "";
// }

// function dell(){
//     // var del = document.createElement("button");
//     // var delbtn = document.createTextNode("Delete");
//     // del.appendChild(delbtn);
//     // del.setAttribute("onclick" , "delItem(this)");
//     inputField.innerHTML = " ";
// }

// // Task 6 : Check the word is Palindrome Or Not;

// function palindrome(word) {
//     word = prompt("Enter the word i wanna check the word is Palindrome Or Not (: ").toLowerCase();
//     if (word == word.split("").reverse().join("")) {
//         alert("The word is Palindrome");
//     }
//     else {
//         alert("This word ! Palindrome");
//     }
// }


// // Task 7 : Check the word is Palindrome Or Not For Loop Method;

// function checkPalindrome(word) {
//     word = prompt("Enter the word i wanna check the word is Palindrome Or Not (: ").toLowerCase();
//     let wordPalindrome = true;
//     for (let i = 0; i < word.length - 1; i++) {
//         if (word[i] !== word[word.length - 1 - i]) {
//             wordPalindrome = false;
//         }
//     }
//     if (wordPalindrome) {
//         alert("The word is Palindrome");
//     }
//     else {
//         alert("This is ! Palindrome")
//     }
// }

// // Task 8 : Ask the user which word to replace:

// let paragraph = "Pakistan an Agricultural Country .?";

// function replacePara() {
//     let oldString = prompt("Enter the word you want to replace" + paragraph).toLowerCase();
//     let newString = prompt("Entre which word you want to replace new word ?").toLowerCase();
//     let allOccurence = prompt("Do you want replace all Occurence ?(Yes/No)").toLowerCase();

//     // if(oldString && newString){
//     if (allOccurence === "yes") {
//         paragraph = paragraph.replaceAll(oldString, newString);
//     }
//     else {
//         paragraph = paragraph.replace(oldString, newString);
//     }
//     alert(paragraph);
// }

// // Task 9 : Paragraph word count:

// let dummyPara = "The quick brown fox jumps over the lazy dog";
// function countNumber() {
//     var count = dummyPara.split("").length;
//     alert(count + " " + dummyPara);
// }

// // Task 10 : Order to insensitive case :

// function bakeryItem() {
//     let a = ["cake" , "apple pie" , "cookie" , "chips" , "patties" , "biscutes" , "rusk" , "donut" ];
//     let userInput = prompt(a + "                              " +"What do you wnat to order in bakkery items ? ").toLowerCase();
//     let order = "";
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == userInput) {
//             order = true;
//         }
//     }
//     if(order) {
//         alert("Your Order is now processing (:")
//     }
//     else if(order !== userInput){
//         alert("Sorry! " + userInput + " is not in our menu (: ")
//     } 
//     else{
//         alert("Come Agin");
//     }
// }