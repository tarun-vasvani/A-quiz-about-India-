// assignment level one

var readlineSync = require("readline-sync");

var score = 0;

// welcome 

var userName = readlineSync.question("What is your name!?");
console.log("Welcome " + userName + "! To The Quiz of India" );
console.log("-------------")


// bonuns
// console.log("Press c to continue !")
// console.log("Press e to exit !")
// function ahead(goahead,exit) {
  
//    var keyOne = readlineSync.question(goahead);
//    var keyTwo = readlineSync.question(exit)
//   if (keyOne === c) {
   
//     for (n = 0; n=questions ; n++){
//        console.log("Now your game will start !!!")
//     }
//   }else if (keyTwo === e) {
//     for(j=0; j = userName ; j++) {
      
     
//     }
//   }
// } 
// ahead()

// var game = userName;
// ahead(game.goahead, game.exit)





// // function 
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log(   )
    console.log("Bilkul sahi uttar diya h apne !!!".toUpperCase())
    score = score + 1 ;
    console.log("Current Score : " + score);
  }else{
    console.log("Nirasha hai ki apka uttar sahi nhi h !!!".toUpperCase())
    console.log("Current Score : " + score)
  }console.log("-----------")
}


// array of objects containing questions
let questions = [
 
  {"question" : "Which city is the capital of India ?  "  + "a.Delhi,  "  + "b.Mumbai,  " +  "c.Kolkata   ",
  "answer" : "a"},
  
  {"question" : "Name the current Prime Minister of India.  " + "a.Mr.Ram Nath Kovind  " + "b.Mr.Narendra Modi   ",
  "answer" : "b"},
 
  {"question" : "Which state is most populated state in India?  " + "a.Rajasthan  " + "b.Kolkata  " + "c.Uttarpradesh   ",
  "answer" : "c"},
  
  {"question" : "How many states are there in India?  " + "a.26  " + "b.28  " + "c.29   ",
  "answer" : "c"},
 
  {"question" : "How many gold medals India won in 2021 Tokyo Olympics?  " + "a.2  " + "b.1  " + "c.8   ",
  "answer" : "b"},
 
  {"question" : "Which city is know as the pink city ?  " + "a.Jaiselmer  " + "b.Jodhpur  " + "c.Jaipur   " ,
  "answer" : "c"},
  
  {"question" : "Which city is also called as the Sillicon Valley of India ?  " + "a.Hyderabad  " + "b.Bangalore  " + "c.Mumbai   ",
  "answer" : "b"},
]


//  loop

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("Badhai ho ! ".toUpperCase() + userName.toUpperCase() + " apka final score h : ".toUpperCase() + score);
