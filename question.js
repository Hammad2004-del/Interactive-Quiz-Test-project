const questions = [
    {
        question:"Abstract Classes in Java ",
        answers:[
            { text: "Can be instantiated directly", correct: false},
            { text: "Can contain abstract methods", correct: true},
            { text: "Cannot have constructors", correct: false},
            { text: "Must have all methods in abstract", correct: false}
        ]
    },
    {
        question:"Which of these cannot be extended in Java?",
        answers:[
            { text: "final class", correct: true},
            { text: "abstract class", correct: false},
            { text: "interface", correct: false},
            { text: "normal class", correct: false}
        ]

    },
     {
        question:"Which of the following is not a feature of OOPs in Java?",
        answers:[
            { text: "Inheritance", correct: false},
            { text: "Encapsulation", correct: false},
            { text: "Polymorphism", correct: false},
            { text: "Compilation", correct: true}
        ]

    },
     {
        question:"Which Keyword is  used  to achieve inheritance in Java?",
        answers:[
            { text: "this", correct: false},
            { text: "extends", correct: true},
            { text: "super", correct: false},
            { text: "implements", correct: false}
        ]

    },
     {
        question:"Which OOP principle hides data by restricting direct access to variables?",
        answers:[
            { text: "Polymorphism", correct: false},
            { text: "Encapsulation", correct: true},
            { text: "Polymorphism", correct: false},
            { text: "Inheritance", correct: false}
        ]

    },
     {
        question:"Which type of inheritance is not supported directly in Java?",
        answers:[
            { text: "Single", correct: false},
            { text: "Multilevel", correct: false},
            { text: "Multiple(with classes)", correct: true},
            { text: "Hierchical", correct: false}
        ]

    },
     {
        question:"What does the super keyword do?",
        answers:[
            { text: "Calls parent constructor", correct: false},
            { text: "Accesses parent variables", correct: false},
            { text: "Invokes parent methods", correct: false},
            { text: "All of the above", correct: true}
        ]

    },
     {
        question:"Which OOP concept models the real-world entities as objects?",
        answers:[
            { text: "Encapsulation", correct: false},
            { text: "Object & Classes", correct: true},
            { text: "Abstraction", correct: false},
            { text: "Polymorphism", correct: false}
        ]

    },
     {
        question:"What is the main advantage of encapsulation?",
        answers:[
            { text: "Code reusability", correct: false},
            { text: "Data hiding and security", correct: true},
            { text: "Faster execution", correct: false},
            { text: "None", correct: false}
        ]

    },
    {
        question:"Which concepts allows you to use the same method name with different implementations?",
        answers:[
            { text: "Inheritance", correct: false},
            { text: "Polymorphism", correct: true},
            { text: "Encapsulation", correct: false},
            { text: "Abstraction", correct: false}
        ]

    }
];
let currentQuestionIndex = 0;      
let score=0;

const questionElement= document.getElementById('question');
const answerButtonsElement= document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');
const scoreElement=document.getElementById('score');
const resultContainer=document.getElementById('result-container');
const restartButton=document.getElementById('restart-btn');

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.style.display='none';
    resultContainer.style.display='none';
    showQuestion();

}
function showQuestion(){
    resetState();
    const currentQuestion=questions[currentQuestionIndex];
    questionElement.innerText=currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement('button');
        button.innerText=answer.text;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

    });
}
function resetState(){
    nextButton.style.display='none';
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton=e.target;
    const correct= selectedButton.dataset.correct;
    if(correct){
        score++;
    }
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct);
    });
    if(currentQuestionIndex < questions.length-1){
        nextButton.style.display='block';
    }else{
        showResults();
    }

}
function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    } else{
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
function showResults(){
    questionElement.innerText=`You scored ${score} out of ${questions.length}!`;
    resultContainer.style.display='block';
    nextButton.style.display='none';
    resetState(); // Add this line to clear the answer buttons
}

nextButton.addEventListener('click',() =>{
    currentQuestionIndex++;
    showQuestion();

});
restartButton.addEventListener('click',startQuiz);
// Start the quiz initially
startQuiz();