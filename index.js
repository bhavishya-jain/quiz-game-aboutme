var chalk = require('chalk');
var readlineSync = require("readline-sync");

var score = 0;

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Indore"
},
{
  question: "When is my birthday? ",
  answer: "31 January"
},
{
  question: "Which cuisine do I like the most? ",
  answer: "Indian"
},
{
  question: "what is my favourite Indian holiday destination? ",
  answer: "Goa"
},
{
  question: "Which domain do I like the most? ",
  answer: "Web Development"
}];

function welcome() {
 var userName = readlineSync.question(chalk.yellow("What's your name? "));

  console.log(chalk.blue("Welcome "+ userName + " to HOW WELL DO YOU KNOW Bhavishya?- Quiz Game"));
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log(chalk.green("You are right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.red("You are wrong!"));
  }

  console.log(chalk.magentaBright("current score: ", score));
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function dispScore() {
  console.log(chalk.yellowBright("Your Final Score: ", score));
  console.log(chalk.greenBright("Thanks for playing!"))
}


welcome();
game();
dispScore();



