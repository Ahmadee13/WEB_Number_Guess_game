let guessInput = document.getElementById("userGuess");
let submitBtn = document.getElementById("guessBtn");
let resetBtn = document.getElementById("resetBtn");
let message = document.getElementById("message");
let attemptCount = document.getElementById("attemptCount");

let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

submitBtn.addEventListener("click", function () {

    let userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess)) {
        message.textContent = "Please enter a number!";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed the number!";
        submitBtn.disabled = true;
    } 
    else {
        attempts--;
        attemptCount.textContent = attempts;

        if (attempts === 0) {
            message.textContent = "Game Over! The number was " + randomNumber;
            submitBtn.disabled = true;
        } 
        else if (userGuess < randomNumber) {
            message.textContent = "Too Low! Try again.";
        } 
        else {
            message.textContent = "Too High! Try again.";
        }
    }
});

resetBtn.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 3;
    attemptCount.textContent = attempts;
    message.textContent = "";
    submitBtn.disabled = false;
    guessInput.value = "";
});