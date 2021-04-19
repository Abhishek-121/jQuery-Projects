$(document).ready(function(){
    let firstNumber = parseInt(Math.random()*10);
    let secondNumber = parseInt(Math.random()*10);
    let total = firstNumber + secondNumber;
    $('#first-number').text(firstNumber);
    $('#second-number').text(secondNumber);
    $('#check').click(function(){
        let guess = document.getElementById('guess').value;
        if(Number(guess)===total){
            alert("Wow...Your Answer is correct");
            window.location.reload();
        }
        else{
            alert("Wrong answer ....try again");
            window.location.reload();
        }
    });
});
