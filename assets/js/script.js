const startButton = document.getElementByID('start-btn')
const nextButton = document.getElementByID('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById ('question')
const answerButtonsElement = document.getElementById ('answer-buttons')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innterText -answer.textbutton.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    
}

const questions = [
    {
        question: "Commonly used data types DO Not Include:" ,
        answers: [
            { text: "1. strings", correct: false},
            { text: "2. booleans", correct: false},
            { text: "3. alerts", correct: true},
            { text: "4. numbers", correct: false},
        ]
        
    }
]