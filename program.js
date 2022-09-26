let buttonPressed = undefined;
let randomChoice = undefined;
const choices = ['Rock', 'Paper', 'Scissors'];
const container = document.querySelector('result-container')
const numberOfGames = document.querySelector('#numberOfGames');
const playerWins = document.querySelector('#playerWins');
const computerWins = document.querySelector('#computerWins');

const getButtonPressed = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttonPressed = button.id.toString();
            console.log(buttonPressed);
            playOneRound(buttonPressed, getRandomChoice(3))
        })
    }, false);
};


const getRandomChoice = (x) => {
    randomChoice = choices[Math.floor(Math.random() * x)];
    console.log(randomChoice);
    return randomChoice;
};


const playOneRound = (getButtonPressed, getRandomChoice) => {
    if (getButtonPressed === getRandomChoice){
        numberOfGames.textContent++;
        playerWins.textContent++;
        computerWins.textContent++;
    };
    if (getButtonPressed === "Paper"){
        if (getRandomChoice === "Scissors"){
            computerWins.textContent++;
            numberOfGames.textContent++;
            
        }
        if (getRandomChoice === "Rock") {
            playerWins.textContent++;
            numberOfGames.textContent++;
        }
    }
    if (getButtonPressed === "Scissors"){
        if (getRandomChoice === "Rock"){
            computerWins.textContent++;
            numberOfGames.textContent++;
        }
        if (getRandomChoice === "Paper") {
            playerWins.textContent++;
            numberOfGames.textContent++;
        }
    }
    if (getButtonPressed === "Rock"){
        if (getRandomChoice === "Paper"){
            computerWins.textContent++;
            numberOfGames.textContent++;
        }
        if (getRandomChoice === "Scissors") {
            playerWins.textContent++;
            numberOfGames.textContent++;
        }
    }

    if (getButtonPressed === "Reset"){
        playerWins.textContent = '0';
        computerWins.textContent = '0';
        numberOfGames.textContent = '0';
    }

    let gamesPlayed = numberOfGames.textContent;
            if (gamesPlayed == "5"){
                if (parseInt(computerWins.textContent) > parseInt(playerWins.textContent)){
                    alert("You lose!")
                }
                if (parseInt(computerWins.textContent) < parseInt(playerWins.textContent)){
                    alert("You win!")
                }
                if (parseInt(computerWins.textContent) == parseInt(playerWins.textContent)){
                    alert("Tie!")
                }
            }

};

getButtonPressed();