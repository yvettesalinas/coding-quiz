const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Commonly used data types DO Not Include:", 
        choice1: "strings",
        choice2: "booleans", 
        choice3: "alerts", 
        choice4: "numbers",
        answer: 3, 
    }, 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        choice1: "JavaScript",
        choice2: "terminal/bash", 
        choice3: "for loops", 
        choice4: "console.log",
        answer: 4, 
    }, 
    {
        question: "String values must be enclosed within ______ when being assigned to variables.", 
        choice1: "commas",
        choice2: "curly brackets", 
        choice3: "quotes", 
        choice4: "parenthesis",
        answer: 3, 
    }, 
    {
        question: "The condition in an if / else statement is enclosed with _________.", 
        choice1: "quotes",
        choice2: "curly brackets", 
        choice3: "parenthesis", 
        choice4: "square brackets",
        answer: 2, 
    } 
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX-QUESTIONS) * 100}%'

    const questionsIndex = Math.floor (Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions [questionsIndex]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerTExt = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore (SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame ()


