//0 = rock
//1 = paper
//2 = scissors
let computerChoice;
let playerChoice;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

    computerChoice = Math.floor((Math.random() * 3));

    switch (computerChoice) {

        case 0:
            computerChoice = "ROCK";
            break;

        case 1:
            computerChoice = "PAPER";
            break;

        case 2:
            computerChoice = "SCISSORS";
            break;

    }

}

//function to play a single round
function playRound(computerChoice, playerChoice) {

    switch (computerChoice) {

        //for if the comp chose rock
        case "ROCK":

            switch (playerChoice) {

                //for if the user chose rock
                case "ROCK":
                    return "You TIE!";
                    break;

                //if the user chose paper
                case "PAPER":
                    playerScore++;
                    return `You WIN! ${playerChoice} beats ${computerChoice}`;
                    break;

                //if the user chose scissors
                case "SCISSORS":
                    computerScore++;
                    return `You LOSE! ${computerChoice} beats ${playerChoice}`;
                    break;

            }//end of user switch case

            break;



        //if the comp chose paper
        case "PAPER":

            switch (playerChoice) {

                //for if the user chose rock
                case "ROCK":
                    computerScore++;
                    return `You LOSE! ${computerChoice} beats ${playerChoice}`;
                    break;

                //if the user chose paper
                case "PAPER":
                    return "You TIE!";
                    break;

                //if the user chose scissors
                case "SCISSORS":

                    playerScore++;
                    return `You WIN! ${playerChoice} beats ${computerChoice}`;
                    break;

            }//end of user switch case
            break;


        //if the comp chose scissors
        case "SCISSORS":
            switch (playerChoice) {

                //for if the user chose rock
                case "ROCK":
                    playerScore++;
                    return `You WIN! ${playerChoice} beats ${computerChoice}`;
                    break;

                //if the user chose paper
                case "PAPER":
                    computerScore++;
                    return `You LOSE! ${computerChoice} beats ${playerChoice}`;
                    break;

                //if the user chose scissors
                case "SCISSORS":
                    return "You TIE!";
                    break;

            }//end of user switch case


            break;


    }

}

function checkForWinner(){
    //checks score
    if(playerScore >= 5 || computerScore >= 5){
        const winnerText = document.createElement("h2");
        if(playerScore > computerScore){
            winnerText.textContent = "Congrats you won!!!";
        } else {
            winnerText.textContent = "Sorry the computer won...";
        }
        document.body.appendChild(winnerText);
    }
    //if there is winner disable buttons
    //add reset button

}


const scores = document.querySelector(".scores");
const playerScoreLabel = document.createElement("h3");
const computerScoreLabel = document.createElement("h3");
playerScoreLabel.innerText = "Player Score: 0";
computerScoreLabel.innerText = "Computer Score: 0";
scores.appendChild(playerScoreLabel);
scores.appendChild(computerScoreLabel);


function updateScores(){
    

    playerScoreLabel.innerText = "Player Score: " + playerScore;
    computerScoreLabel.innerText = "Computer Score: " + computerScore;

    

}

document.addEventListener("DOMContentLoaded", function(){


    //const roundSummary = document.getElementById("roundSummary");
    const roundSummary = document.createElement("p");
    roundSummary.id = "summary";
    document.body.appendChild(roundSummary);


    const rockBtn = document.querySelector("#R");
    rockBtn.addEventListener("click", function(){
        getComputerChoice();
        console.log("Player chose ROCK");
        console.log(`Computer chose ${computerChoice}`);
        roundSummary.textContent = playRound(computerChoice, "ROCK");
        //console.log(playRound(computerChoice, "ROCK"));
        updateScores();
        checkForWinner();
    });

    const paperBtn = document.querySelector("#P");
    paperBtn.addEventListener("click", function(){
        getComputerChoice();
        console.log("Player chose PAPER");
        console.log(`Computer chose ${computerChoice}`);
        roundSummary.textContent = playRound(computerChoice, "PAPER");
        updateScores();
        checkForWinner();
    });

    const scissorsBtn = document.querySelector("#S");
    scissorsBtn.addEventListener("click", function(){
        getComputerChoice();
        console.log("Player chose SCISSORS");
        console.log(`Computer chose ${computerChoice}`);
        roundSummary.textContent = playRound(computerChoice, "SCISSORS");
        updateScores();
        checkForWinner();
    });


});


//playGame(3);
