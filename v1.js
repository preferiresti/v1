const questions = [
    {
        text: "Would you rather be able to fly or become invisible?",
        rules: "Fly: Maximum speed of 10mph, height of 20 feet. Invisible: Only your body becomes invisible, not your clothes."
    },
    // ... add more questions and their specific rules here
];

let currentQuestionIndex = -1;

const questionElement = document.getElementById('question');
const rulesElement = document.getElementById('rules');

document.getElementById('nextQuestion').addEventListener('click', loadNextQuestion);
document.getElementById('showRules').addEventListener('click', toggleRules);

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0; // loop back to the beginning
    }
    questionElement.textContent = questions[currentQuestionIndex].text;
    rulesElement.textContent = questions[currentQuestionIndex].rules;
    rulesElement.classList.add('hidden'); // hide rules initially
}

function toggleRules() {
    rulesElement.classList.toggle('hidden');
}

loadNextQuestion(); // Load the first question on page load
