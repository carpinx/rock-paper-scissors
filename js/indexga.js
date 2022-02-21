let options = ["Rock", "Paper", "Scissors"];

let playerSelection;
let computerSelection;
let playerSelectionLang;
let computerSelectionLang;

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
result.innerHTML = `<span class="playerSelection">${playerName}</span>, escolle a túa arma`;

let subtitle = document.querySelector(".subtitle");
let reset = document.querySelector(".resetButton");

reset.addEventListener("click", resetButtonPressed);

function buttonPressed(e) {
    playerSelection = e.target.id;

    computerSelection = Math.floor(Math.random() * options.length);
    computerSelection = options[computerSelection];

    switch (computerSelection) {
      case "Rock":
        computerSelectionLang = "Pedra";
        break;
      case "Paper":
        computerSelectionLang = "Papel";
        break;
      case "Scissors":
        computerSelectionLang = "Tesoiras";
        break;
    }

    switch (playerSelection) {
      case "Rock":
        playerSelectionLang = "Pedra";
        break;
      case "Paper":
        playerSelectionLang = "Papel";
        break;
      case "Scissors":
        playerSelectionLang = "Tesoiras";
        break;
    }

    if(playerSelection == computerSelection) {
        // TIE
        result.innerHTML = `Ambos escollestes <span class="playerSelection">${playerSelectionLang}</span>! Empate!`;
    } else if(
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")
        ) {
        // WIN
        scorePlayer = scorePlayer + 1;
        result.innerHTML = `<span class="playerSelection">${playerSelectionLang}</span> vence a <span class="computerSelection">${computerSelectionLang}</span>! <span class="playerSelection">${playerName}</span> gañou!`;
    } else {
        // LOSE
        scoreComputer = scoreComputer + 1;
        result.innerHTML = `<span class="computerSelection">${computerSelectionLang}</span> vence a <span class="playerSelection">${playerSelectionLang}</span>! A máquina gañou!`;
    }

    imgPlayer.src = `img/${playerSelection.toLowerCase()}.gif`;
    imgComputer.src = `img/${computerSelection.toLowerCase()}.gif`;
    for (const button of buttons) {
        button.classList.add("disabled");
    }

    
    if(scorePlayer == 5) {
        result.innerHTML = `<span class="playerSelection">${playerName} gañou o xogo</span>!`;
        subtitle.classList.add("hidden");
        reset.classList.remove("hidden");
    } else if(scoreComputer == 5) {
        result.innerHTML = `<span class="computerSelection">A máquina gañou o xogo</span>!`;
        subtitle.classList.add("hidden");
        reset.classList.remove("hidden");
    } else {
        setTimeout(function(){
            imgPlayer.src = `img/wave.gif`;
            imgComputer.src = `img/wave.gif`;
            for (const button of buttons) {
                button.classList.remove("disabled");
            }
            result.innerHTML = `<span class="playerSelection">${playerName}</span>, escolle a túa arma`;
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
    result.innerHTML = `<span class="playerSelection">${playerName}</span>, escolle a túa arma`;

}