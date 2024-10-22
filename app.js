let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");
let msgContainer = document.querySelector(".msg-container");
let userScoreElement = document.getElementById("user-score");
let compScoreElement = document.getElementById("comp-score");

let genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

let drawGame = () => {
  message.innerText = "Game was draw. Play again";
  msgContainer.style.backgroundColor = "#17153B";
};

let showWinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    message.innerText = `You Win (${userChoice} beats ${compChoice})`;
    msgContainer.style.backgroundColor = "green";
    userScore++;
    userScoreElement.innerText = userScore;
  } else {
    message.innerText = `You lose (${compChoice} beats ${userChoice})`;
    msgContainer.style.backgroundColor = "red";
    compScore++;
    compScoreElement.innerText = compScore;
  }
};

let playGame = (userChoice) => {

  let compChoice = genCompChoice();
  if (compChoice === userChoice) {
    drawGame();
  } else {
    userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, compChoice, userChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
