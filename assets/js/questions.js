// We hav a variable "questions" with an array of objects and each object has three properties: the questions, answers that the user can choose from and the actual right answer.

var questions = [
{
    questionText: "Commonly used data types DO Not Include:",
    answers: ["1. strings, 2. booleans, 3. alerts, 4. numbers"],
    rightAnswer: "2. booleans"
},

{
    questiontext: "The condition in an if/ else statement is enclosed with.....",
    answers: ["1. quotes, 2. curly brackets, 3. parenthesis, 4. square brackets"],
    rightAnswer: "3. parenthesis"
},

{
    questionText: "Arrays in JavaScript can be used to store...",
    answers: ["1. numbers and strings, 2. other arrays, 3. booleans, 4. all of the above"],
    rightAnswer: "4. all of the above" 
},

]

// This variable is to keep track which question we are showing the user
var currentQuestion = 0;