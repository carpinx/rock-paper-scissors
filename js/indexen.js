let options = ["Rock", "Paper", "Scissors"];

let playerSelection;
let computerSelection;

let playerName = localStorage.getItem("playerName");
let playerNameContainer = document.querySelector(".playerNameContainer");
playerNameContainer.textContent = playerName;

let buttons = document.querySelectorAll(".buttons img");
for (const button of buttons) {
    button.addEventListener("click", buttonPressed);
}

let imgPlayer = document.querySelector(".images__player");
let imgComputer = document.querySelector(".images__computer");

let scorePlayerContainer = document.querySelector(".scores__player .playerScoreContainer");
let scoreComputerContainer = document.querySelector(".scores__computer span");
let scorePlayer = 0;
let scoreComputer = 0;
scorePlayerContainer.innerHTML = `${scorePlayer}`;
scoreComputerContainer.innerHTML = `${scoreComputer}`;

let result = document.querySelector(".result");
result.innerHTML = `<span class="playerSelection">${playerName}</span>, choose your weapon`;

let subtitle = document.querySelector(".subtitle");
let reset = document.querySelector(".resetButton");

reset.addEventListener("click", resetButtonPressed);

function buttonPressed(e) {
    playerSelection = e.target.id;

    computerSelection = Math.floor(Math.random() * options.length);
    computerSelection = options[computerSelection];

    if(playerSelection == computerSelection) {
        // TIE
        result.innerHTML = `You both chose <span class="playerSelection">${playerSelection}</span>! It's a tie!`;
    } else if(
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")
        ) {
        // WIN
        scorePlayer = scorePlayer + 1;
        result.innerHTML = `<span class="playerSelection">${playerSelection}</span> beats <span class="computerSelection">${computerSelection}</span>! <span class="playerSelection">${playerName}</span> won!`;
    } else {
        // LOSE
        scoreComputer = scoreComputer + 1;
        result.innerHTML = `<span class="computerSelection">${computerSelection}</span> beats <span class="playerSelection">${playerSelection}</span>! Computer won!`;
    }

    imgPlayer.src = `img/${playerSelection.toLowerCase()}.gif`;
    imgComputer.src = `img/${computerSelection.toLowerCase()}.gif`;
    for (const button of buttons) {
        button.classList.add("disabled");
    }

    
    if(scorePlayer == 5) {
        result.innerHTML = `<span class="playerSelection">${playerName} won the game</span>!`;
        subtitle.classList.add("hidden");
        reset.classList.remove("hidden");
    } else if(scoreComputer == 5) {
        result.innerHTML = `<span class="computerSelection">Computer won the game</span>!`;
        subtitle.classList.add("hidden");
        reset.classList.remove("hidden");
    } else {
        setTimeout(function(){
            imgPlayer.src = `img/wave.gif`;
            imgComputer.src = `img/wave.gif`;
            for (const button of buttons) {
                button.classList.remove("disabled");
            }
            result.innerHTML = `<span class="playerSelection">${playerName}</span>, choose your weapon`;
        },2000);
    }

    scorePlayerContainer.innerHTML = `${scorePlayer}`;
    scoreComputerContainer.innerHTML = `${scoreComputer}`;
}

function resetButtonPressed() {
    subtitle.classList.remove("hidden");
    reset.classList.add("hidden");

    scorePlayer = 0;
    scoreComputer = 0;
    scorePlayerContainer.innerHTML = `${scorePlayer}`;
    scoreComputerContainer.innerHTML = `${scoreComputer}`;

    imgPlayer.src = `img/wave.gif`;
    imgComputer.src = `img/wave.gif`;
    for (const button of buttons) {
        button.classList.remove("disabled");
    }
    result.innerHTML = `<span class="playerSelection">${playerName}</span>, choose your weapon`;

}