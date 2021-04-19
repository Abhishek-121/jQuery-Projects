console.log("Working Fine");

const quizDB =[
    {
        question: "Q1. What is HTML ?",
        a: "Hello my World",
        b: "Hypert text language",
        c: "Hypert text language marking",
        d: "Hypert text markup language",
        ans: "ans4"
    },
    {
        question : "Q2. hich type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High Level",
        ans: "ans2"
    },
    {
        question : "Q3. Which one of the following also known as Conditional Expression:?",
        a: "Alternative to if-else" ,
        b: "Switch statement",
        c: "If-then-else statement ",
        d: "immediate if",
        ans: "ans4"
    },
    {
        question : "Q4. When interpreter encounters an empty statements, what it will do:",
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Prompts to complete the statement",
        d: "Ignores the statements",
        ans: "ans4"
    },
    {
        question : "Q5. In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans2"
    },
    {
        question : "Q6. The 'function' and  'var' are known as:",
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        ans: "ans3"
    },
    {
        question : "Q7. Which of the following variables takes precedence over the others if the names are the same?",
        a: "Global variable",
        b: "The local element",
        c: "The two of the above",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question : "Q8. Which one of the following is the correct way for calling the JavaScript code?",
        a: "Function/Method",
        b: "Preprocessor",
        c: "Triggering Event",
        d: "RMI",
        ans: "ans1"
    },
    {
        question : "Q9. Which of the following type of a variable is volatile?",
        a: "Mutable variable",
        b: "Dynamic variable",
        c: "Volatile variable",
        d: "Immutable variable",
        ans: "ans1"
    },
    {
        question : "Q10. Which of the following option is used as hexadecimal literal beginning?",
        a: "00",
        b: "0x",
        c: "oX",
        d: "Both 0x and 0X",
        ans: "ans4"
    },

];

const answer = document.querySelectorAll('.answer');

let questionCount=0;
let score =0;

function loadquestion(){
    const questionList = quizDB[questionCount];
    $('.question').text(questionList.question);
    $('#option1').text(questionList.a);
    $('#option2').text(questionList.b);
    $('#option3').text(questionList.c);
    $('#option4').text(questionList.d); 
}
loadquestion();

const getCheckAnswer = () => {
    let checkedBox;
    answer.forEach((currAnsEle) => {
        if(currAnsEle.checked){
            checkedBox = currAnsEle.id;
        }
    });
    return checkedBox;
};


$(document).ready(function(){
    $('#submit').click(function(){
        
        const checkedAnswer = getCheckAnswer();
        if(checkedAnswer===quizDB[questionCount].ans){
            score++;
        }
        questionCount++;
        answer.forEach((currAnsEle) => currAnsEle.checked=false);
        if(questionCount<quizDB.length){
            loadquestion();
        }
        else{
            if(score==10){
                $('#finished').fireworks({
                    sound: true,
                    opacity:  0.7,
                    width: '100%',
                    height: '100%'
                });
            }
            $('#showScore').html(`
            <h3> You scores ${score}/${quizDB.length} ✌️</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
            `)
            $('#showScore').removeClass("scoreArea");
        }
    });
});
