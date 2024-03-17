// const questionContainer = document.getElementById('question-container');
// const answerButtons = document.getElementById('answer-buttons');
// const nextButton = document.getElementById('next-button');
// const feedbackMessage = document.getElementById('feedback-message');

// let currentQuestionIndex = 0;

// const questions = [
//     {
//         question: 'What is the capital of France?',
//         answers: [
//             { text: 'Paris', correct: true },
//             { text: 'London', correct: false },
//             { text: 'Berlin', correct: false },
//             { text: 'Rome', correct: false }
//         ]
//     },
//     {
//         question: 'Who wrote "Romeo and Juliet"?',
//         answers: [
//             { text: 'William Shakespeare', correct: true },
//             { text: 'Charles Dickens', correct: false },
//             { text: 'Jane Austen', correct: false },
//             { text: 'Leo Tolstoy', correct: false }
//         ]
//     },
//     {
//         question: 'What is 2 + 2?',
//         answers: [
//             { text: '3', correct: false },
//             { text: '4', correct: true },
//             { text: '5', correct: false },
//             { text: '6', correct: false }
//         ]
//     }
// ];

// function showQuestion(question) {
//     questionContainer.innerText = question.question;
//     answerButtons.innerHTML = '';
//     question.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText = answer.text;
//         button.classList.add('btn');
//         button.addEventListener('click', () => selectAnswer(answer.correct));
//         answerButtons.appendChild(button);
//     });
// }

// function resetState() {
//     nextButton.classList.add('hide');
//     feedbackMessage.innerText = '';
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectAnswer(correct) {
//     if (correct) {
//         feedbackMessage.innerText = 'Correct!';
//     } else {
//         feedbackMessage.innerText = 'Not correct.';
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         button.disabled = true;
//     });
//     nextButton.classList.remove('hide');
// }

// function nextQuestion() {
//     resetState();
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion(questions[currentQuestionIndex]);
//     } else {
//         alert('Quiz completed!');
//         currentQuestionIndex = 0;
//         showQuestion(questions[currentQuestionIndex]);
//     }
// }

// showQuestion(questions[currentQuestionIndex]);

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;

const backgroundImages = [
    'images/quiz.jpg',
    'images/quiz1.jpg',
    'images/quiz2.jpg',
    'images/quiz3.jpg',
    'images/quiz4.jpg',
    'images/quiz5.jpg',
    'images/quiz6.jpg',
    'images/quiz7.jpg',
    'images/quiz8.jpg',
    'images/quiz9.jpg',
    'images/quiz10.jpg',
    'images/quiz11.jpg',
    'images/quiz12.jpg',
    // Add more image URLs as needed
];

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'London', correct: false },
            { text: 'Berlin', correct: false },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Jane Austen', correct: false },
            { text: 'Leo Tolstoy', correct: false }
        ]
    },
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false }
        ]
    },
    // Add more questions below
    {
        question: 'What is the capital of Japan?',
        answers: [
            { text: 'Tokyo', correct: true },
            { text: 'Beijing', correct: false },
            { text: 'Seoul', correct: false },
            { text: 'Bangkok', correct: false }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Michelangelo', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            { text: 'Au', correct: true },
            { text: 'Ag', correct: false },
            { text: 'Fe', correct: false },
            { text: 'Cu', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        answers: [
            { text: 'Mars', correct: true },
            { text: 'Venus', correct: false },
            { text: 'Mercury', correct: false },
            { text: 'Jupiter', correct: false }
        ]
    },
    {
        question: 'Who wrote "Hamlet"?',
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Jane Austen', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
    {
        question: 'What is the largest mammal in the world?',
        answers: [
            { text: 'Blue whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false },
            { text: 'Hippopotamus', correct: false }
        ]
    },
    {
        question: 'Which country is famous for its tulips?',
        answers: [
            { text: 'Netherlands', correct: true },
            { text: 'Italy', correct: false },
            { text: 'France', correct: false },
            { text: 'Germany', correct: false }
        ]
    },
    {
        question: 'Who discovered penicillin?',
        answers: [
            { text: 'Alexander Fleming', correct: true },
            { text: 'Albert Einstein', correct: false },
            { text: 'Isaac Newton', correct: false },
            { text: 'Marie Curie', correct: false }
        ]
    },
    {
        question: 'What is the largest organ in the human body?',
        answers: [
            { text: 'Skin', correct: true },
            { text: 'Liver', correct: false },
            { text: 'Heart', correct: false },
            { text: 'Brain', correct: false }
        ]
    },
];

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) {
        event.target.classList.add('correct');
        nextButton.classList.add('correct-btn');
        // Display a message indicating the answer is correct
        questionContainer.innerHTML += '<p>Correct!</p>';
    } else {
        event.target.classList.add('wrong');
        nextButton.classList.add('wrong-btn');
        // Display a message indicating the answer is wrong
        questionContainer.innerHTML += '<p>Incorrect!</p>';
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.classList.remove('hide');
}

function nextQuestion() {
    resetState();
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert('Quiz completed!');
        currentQuestionIndex = 0;
        showQuestion(questions[currentQuestionIndex]);
    }
}

showQuestion(questions[currentQuestionIndex]);
