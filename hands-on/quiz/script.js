const questions = [
    {
        question: "What is 10 + 10?",
        options: ["8","20","28","30"],
        answer: "20"
    },
    {
        question: "What is my favourite animal?",
        options: ["cats","otters","sharks","don't have one"],
        answer: "cats"
    }
];

let question_number = 0;
let correct = 0;


document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {
    document.querySelector("#question").innerHTML = questions[question_number].question;

    const options = document.querySelector("#options");
    options.innerHTML = "";
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }
    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            alert(option.textContent);
        }
    });
}
