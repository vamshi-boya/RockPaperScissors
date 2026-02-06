let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//creating array and store values then computer choice from it randomly
const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomId = Math.floor(Math.random() * 3);
    return options[randomId];
    // computer choice rock, paper and scissors
};

//draw function
const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw, Play again!";
    msg.style.backgroundColor = "#081b31";
};

//winner function
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `you win. your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};

const playGame = (userChoice) => {
    //Generate Computer Choice
    const compChoice = genComputerChoice();


    //user choice rock, paper and scissors!
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else {
        let userWin = true;
         
        if(userChoice === "rock"){//first case
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){//second case
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else if(userChoice === "scissors"){//third case
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


//adding event listener
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

