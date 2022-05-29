const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById ('question')
const answersButtonsElement = document.getElementById ('answers-buttons')

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currentQuestionIndex ++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    //startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    //setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innterText = answers.text
        button.classList.add('btn')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswers)
        answersButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answersButtonsElement.firstChild) {
        answersButtonsElement.removeChild
        (answersButtonsElement.firstChild)
    }
}

function selectAnswers(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answersButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        question: 'Commonly used data types DO Not Include:' ,
        answers: [
            { text: '1. strings', correct: false},
            { text: '2. booleans', correct: false},
            { text: '3. alerts', correct: true},
            { text: '4. numbers', correct: false}
        ] 
    }, 
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: '1. JavaScript', correct: false}, 
            { text: '2. terminal/bash', correct: false}, 
            { text: '3. for loops', correct: false}, 
            { text: '4. console.log', correct: true}
        ]
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.',
        answers: [
            { text: '1. commas', correct: false}, 
            { text: '2. curly brackets', correct: false}, 
            { text: '3. quotes', correct: true}, 
            { text: '4. parenthesis', correct: false}
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed with _________.',
        answers: [
            { text: '1. quotes', correct: false}, 
            { text: '2. curly brackets', correct: true}, 
            { text: '3. parenthesis', correct: false}, 
            { text: '4. square brackets', correct: false}
        ]
    }
]