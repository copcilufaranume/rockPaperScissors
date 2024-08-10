const playerScore = document.getElementById("playerScore");
const botScore = document.getElementById("botScore");

const youOption = document.getElementById("youOption");
const submit = document.getElementById("submit");

const container = document.getElementById("container");
const teamYou = document.getElementById("teamYou");
const teamBot = document.getElementById("teamBot");
const winner = document.getElementById("winner");

let result;

const optionsDictionary = {
    1: "Rock",
    2: "Paper",
    3: "Scissors",
};

function play() {
    let botOption = Math.floor(Math.random() * 3 + 1);
    if (youOption.value == botOption) {
        result = "No winner -> Tie";
    } else {
        if (
            (youOption.value == 1 && botOption == 2) ||
            (youOption.value == 2 && botOption == 3) ||
            (youOption.value == 3 && botOption == 1)
        ) {
            result = "Bot";
            botScore.textContent++;
        } else if (
            (youOption.value == 1 && botOption == 3) ||
            (youOption.value == 2 && botOption == 1) ||
            (youOption.value == 3 && botOption == 2)
        ) {
            result = "Player";
            playerScore.textContent++;
        }
    }

    container.style.display = "block";
    teamYou.textContent = `You: ${optionsDictionary[youOption.value]}`;
    teamBot.textContent = `Bot: ${optionsDictionary[botOption]}`;
    winner.textContent = `Winner: ${result}`;
}
