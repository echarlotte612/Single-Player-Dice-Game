let playerScore = 0;

const gameOverAudio = document.getElementById("gameOverAudio");
const playerDice = document.getElementById("playerDice");
const playerScoreboard = document.getElementById("playerScoreboard");
const rollButton = document.getElementById("rollButton");
const resetButton = document.getElementById("resetButton");
const playerHeader = document.getElementById("playerHeader");
const dice = document.getElementById("dice");

rollButton.addEventListener("click", ()=> {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    if (diceRoll === 1) {
        gameOver("Whoops! Try Again?");
        gameOverAudio.play();
    }
    
    playerScore += diceRoll;
    playerScoreboard.textContent = playerScore;
    switch(diceRoll) {
        case 1: dice.src="img/dice1.png"; break;
        case 2: dice.src="img/dice2.png"; break;
        case 3: dice.src="img/dice3.png"; break;
        case 4: dice.src="img/dice4.png"; break;
        case 5: dice.src="img/dice5.png"; break;
        case 6: dice.src="img/dice6.png"; break;
    }
    // playerDice.textContent = diceRoll;
    if (playerScore >= 20) {
        gameOver("Congrats! You've Won!");
        dice.style.filter = "hue-rotate(58deg)";
        winnerAudio.play();
    }
});

resetButton.addEventListener("click", () => {
    playerScore = 0;
    // playerDice.textContent = "-";
    playerScoreboard.textContent = 0;
    rollButton.style.display = "block";
    resetButton.style.display = "none";
    playerHeader.textContent = "Let's Play!";
    dice.style.filter = "grayscale(0%)";
})

function gameOver(message) {
    playerHeader.textContent = message;
    resetButton.style.display = "block";
    rollButton.style.display = "none";
    dice.style.filter = "grayscale(100%)";
}
