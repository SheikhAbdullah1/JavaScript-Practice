function updateCurrentDate(){
    
    var dateTime = document.getElementById("date");
    var currentDate = new Date();
    var formatted = currentDate.toLocaleString();

    dateTime.innerHTML = formatted;
}
updateCurrentDate();















// let hours = document.getElementById("#hour");  
// let minutes = document.getElementById("#minute");  
// let seconds = document.getElementById("#second");  
// let ampm = document.getElementById("#ampm");
// let days = document.getElementById("#day");
// let months = document.getElementById("#month");
// let year = document.getElementById("#year");

// function getDate(){
// let currentDate = new Date();
// let currentHour = currentDate.getHours();
// let currentMinute = currentDate.getMinutes();
// let currentSecond = currentDate.getSeconds();
// let am = "AM";

// if(currentHour <= 12){
//     currentHour = currentHour - 12;
//     ampm = "AM"
// }
// hours.innerText = currentHour;
// minutes.innerText = currentMinute;
// seconds.innerText = currentSecond;
// ampm.innerText = am;
// setTimeout(() => {
//     getDate();
// },1000)
// // else{
// // }
// }
// getDate()




// // let hour = document.getElementById("hour");
// // let minute = document.getElementById("minutes");
// // let seconds = document.getElementById("seconds");
// // let ampm = document.getElementById("ampm");

// // // function digitalClock(){
// //     //     // let CurrentInstance = new date();
// //     //     let hour = new Date().getHours();
// // //     let minutes = new Date().getMinutes();
// // //     let seconds = new Date().getSeconds();
// // //     let am = "AM"

// // //     if(hourElement >= 12){
// // //         hour = hour - 12;
// // //         apElement = "PM";
// // //     }
// // //     hourElement.innerText = hour;
// // //     minuteElement.innerText = minutes;
// // //     secondsElement.innerText = seconds;
// // //     apElement.innerText = am;
// // //     setTimeout(() =>{
// // //         digitalClock()
// // //     },1000) 
// // // }
// // // digitalClock();

// // function getDate(){
// //     // var currentDateInstance = new Date();
// //     hour = new Date().getHours();
// //     minute = new Date().getMinutes();
// //     seconds = new Date().getSeconds();
// //     date = new Date().getDate();
// //     month = new Date().getMonth();
// //     year = new Date().getYear();

// //         if(hour >= 12){
// //         hour = hour - 12;
// //         ampm = "PM";
// //     }
// //     hour.innerText = hour;
// //     minute.innerText = minute;
// //     seconds.innerText = seconds;
// //     // ampm.innerText = am;
// //     setTimeout(() =>{
// //         getDate()
// //     },1000) 
// // }
// //     // hour + " : " + min + " : " + sec + " : " + date + " : " + month + 1 + " : " + year
// // // }
// // getDate()