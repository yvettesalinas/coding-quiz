const question =document.querySelector('#question');
const choices =Array.from(document.querySelectorAll('.choice-text'));
const progressText =document.querySelector('#progressText');
const scoreText =document.querySelector('#score');
const progressBarFull =document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Commonly used data types DO Not Include:', 
        choice1: 'strings',
        choice2: 'booleans', 
        choice3: 'alerts', 
        choice4: 'numbers',
        answer: 3, 
    }, 
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:', 
        choice1: 'JavaScript',
        choice2: 'terminal/bash', 
        choice3: 'for loops', 
        choice4: 'console.log',
        answer: 4, 
    }, 
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.', 
        choice1: 'commas',
        choice2: 'curly brackets', 
        choice3: 'quotes', 
        choice4: 'parenthesis',
        answer: 3, 
    }, 
    {
        question: 'The condition in an if / else statement is enclosed with _________.', 
        choice1: 'quotes',
        choice2: 'curly brackets', 
        choice3: 'parenthesis', 
        choice4: 'square brackets',
        answer: 2, 
    }
   
]




