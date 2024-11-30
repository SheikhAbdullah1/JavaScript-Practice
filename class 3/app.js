// // var a = "Pakistan Zindabad";
// // var b = a.indexOf("bad");   
// // console.log(b);

// // let names = ["Shaikh", "Pakistan", "Khan", "Khurram"];
// // for(let i = 0; i < names.length ; i++){
// //     if(names[i].indexOf("i") >= 0){
// //         console.log("Letter i was found !");
// //     }
// //     else{
// //         console.log("Letter i was not found !");        
// //     }
// // }

// // function getUser(){
// //     console.log("Hello");    
// // }
// // getUser();

// // function changeToLowerCase(){
// //     let userInput = prompt("Enter dummy text !...");
// //     console.log(userInput.toLocaleLowerCase());
// // }
// // changeToLowerCase();

// // let a = "Pakistan Zindabad";
// // let b = a.charAt("");
// // console.log(b);

// // var nameing = ["khan", "Bilawal" , "Jadooon"];
// // for( var i = 0 ; i <= 0 ; i++){
// //     console.log("i");
// // }

// // for (i = 0 ; i <= 10 ; i++){
// // for(j = 0 ; j <= 10; j++){
// //     console.log(i + " " + j );
// //     }
// // }

// // var a = "Hello world";
// // var b = a.split("");
// // b.reverse("");
// // console.log(b);

// // function identifyMatrix(){
// //     for (let i = 1; i <= 3; i++) {
// //         let pattren = " ";
// //         for (let j = 1; j <= 3; j++) {
// //         if (i == j) {
// //             pattren = pattren + " " + 1;
// //         }
// //         else {
// //             pattren = pattren + " " + 0;
// //         }
// //     }
// // }
// // }
// // identifyMatrix();
// // console.log(identifyMatrix());
// // console.log(i + j)


// // function palindrome(word){
// //     if(word.toLowerCase() == word.toLowerCase().split("").reverse().join("") ){
// //             console.log("Palindrome found !");
// //     }
// //     else{
// //         console.log("Palindrome not found !");
// //     }
// // }
// // palindrome("madam");


// // else if(totalNumber >= 80 || "A"){
// //     console.log("HEllo");}



// // let userSubjectNumber1 = prompt("Enter your English Marks");
// // let userSubjectNumber2 = prompt("Enter your English Marks");
// // let userSubjectNumber3 = prompt("Enter your English Marks");
// // let userSubjectNumber4 = prompt("Enter your English Marks");

// // let totalNumber = userSubjectNumber1 + userSubjectNumber2 + userSubjectNumber3 + userSubjectNumber4;

// // if(totalNumber <= 90% ){
// //     console.log("Congratulation you got A+");
// // }
// // else if(totalNumber >= "80%" ){
// //     console.log("HEllo");}
// // else{
// //     console.log("Tayyri kar wapis");
// // }



// // Task 4 : Write a function for gathering circketer's 

// // let nameOfCircketer;

// // let Age;

// // let team;

// // let country;

// // let gender;

// // let playedInUnder13;

// // let playedInUnder19;

// // let playedInT20Team;

// // let playedInOdiTeam;

// // let playedInTeam;

// // let totalT20MatchesPlayed;

// // let totalT20MatchesPlayedHighScore;

// // let totalOdiMatchesPlayed;

// // let totalOdiMatchesPlayedHighScore;

// // let totalTestMatchPlayed;

// // let totalTestMatchesPlayedHighScore;

// // let bestScored;

// // function getheringCircketerInfo(){

// //     nameOfCircketer = prompt("Enter Circketer Name !"); 

// //     Age = +prompt("Enter Circketer Age !"); 

// //     team = prompt("Enter Circketer Team !"); 

// //     country = prompt("Enter Circketer Country !"); 

// //     gender = prompt("Enter Circketer Gender !"); 

// //     playedInUnder13 = prompt("Enter Circketer Playing Under 13 Team Name !"); 

// //     playedInUnder19 = prompt("Enter Circketer Playing Under 19 Team Name!");

// //     playedInTeam = prompt("Enter Circketer Playing Team !");

// //     playedInT20Team = prompt("Enter Circketer Playing T20 Team !");

// //     playedInOdiTeam = prompt("Enter Circketer Playing ODI Team !");

// //     totalT20MatchesPlayed = +prompt("Enter Circketer Played Total T20 Matches !");

// //     totalT20MatchesPlayedHighScore = +prompt("Enter Circketer Playing T20 Matche Best Score !");

// //     totalOdiMatchesPlayed = +prompt("Enter Circketer Played Total ODI Matches !");

// //     totalOdiMatchesPlayedHighScore = +prompt("Enter Circketer Playing ODI Matche Best Score !");

// //     totalTestMatchPlayed = +prompt("Enter Circketer Played Total Test Matches !");

// //     totalTestMatchesPlayedHighScore = +prompt("Enter Circketer Played Test Matche Best Score !");

// //     bestScored = +prompt("Enter Circketer High Score !");   
// // }
// // getheringCircketerInfo();

// // console.log(nameOfCircketer);
// // console.log(Age);
// // console.log(team);
// // console.log(country);
// // console.log(gender);
// // console.log(playedInUnder13);
// // console.log(playedInUnder19);
// // console.log(playedInT20Team);
// // console.log(playedInOdiTeam);
// // console.log(playedInTeam);
// // console.log(totalT20MatchesPlayed);
// // console.log(totalT20MatchesPlayedHighScore);
// // console.log(totalOdiMatchesPlayed);
// // console.log(totalOdiMatchesPlayedHighScore);
// // console.log(totalTestMatchPlayed);
// // console.log(totalTestMatchesPlayedHighScore);
// // console.log(bestScored);


// // Task 5 : Todo Application 

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

// // function add(e) {
// //     var a = prompt("Enter value which you wanna edit", e.parentNode.firstChild.nodeValue);
// //     e.parentNode.firstChild.nodeValue = a;
// //     listCreate.appendChild(textInsert);
// //     e.appendChild;
// //     e.value = "";
// // }
// // add();
// // function del() {
// //     this.parentNode.remove();
// //     a.innerHtml = "";
// // }
// // del();

// // Task 6 : Check the word is Palindrome Or Not ;

// // function palindrome(word) {
// //     word = word.toLowerCase()
// //     if (word == word.split("").reverse().join("")) {
// //         console.log("The word is Palindrome");
// //     }
// //     else {
// //         console.log("This word ! Palindrome");
// //     }
// // }
// // palindrome("dad");

// // Task 7 : Check the word is Palindrome Or Not For Loop Method ;

// // function checkPalindrome(word){
// //     word = word.toLowerCase();
// //     for(let i = 0 ; i < word.length-1 ; i++){
// //         if(word[i] !== word.length-1){
// //             console.log("Palindrome");
// //         }
// //         else{
// //             consolelog("!Palindrome")
// //         }
// //     }   
// // }
// // console.log(checkPalindrome("Madam"));

// // Task 8 : Ask the user which word to replace :

// // function replacePara(){
// //     let paragraphDummy = "Pakistan is an agricultural country";
// //     let userPara = prompt("Enter Paragrapg you want to replace ? ".toLowerCase());
    
// //     if(userPara){
// //         let newPara = paragraphDummy.replaceAll(userPara);
// //         console.log("Updated Para " + newPara);
// //     }
// //     else{
// //         console.log("Enter Paragraph")
// //     }
// // }
// // replacePara();

// // Task 9 : Paragraph word count :

// // let paragraph = "The quick brown fox jumps over the lazy dog";
// // function countNumber(){
// //     paragraph = paragraph.split("");
// //     var count = paragraph.length;
// //     console.log(count);
// //     console.log(paragraph);
// // }
// // countNumber();

// // let arr = ["Cake", "Zinger", "Cookie", "Chips", "Patties"];
// // let searchItem = prompt("Enter the item to search").toLowerCase();

// // function searchItem(arr, searchItem){
// //     let foundItems = array.filter(item => item.toLowerCase() === searchItem.toLowerCase());

// // }

// // for(let i = 0 ; i <  arr.length ; i++ ){
// //     if(arr[i]){
// //         var userSearch = prompt("Found the Correct word to sotre an array ! Hint : Fast Food Name").toLowerCase();
// //         console.log("You found" + userSearch);
// //     }
// //     else{
// //         console.log("Try Again" );
// //     }
// // }
// // console.log(userSearch)









