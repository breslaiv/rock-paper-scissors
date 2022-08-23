const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';
let GAMES_WON_PC = 0;
let GAMES_WON_USER = 0;

function getComputerChoice() {
    let random_number = Math.floor(Math.random() * 3) + 1;

    if(random_number == 1){
        return ROCK;
    };

    if(random_number == 2){
        return PAPER;
    };

    if(random_number == 3){
        return SCISSORS;
    };
};

function getPlayerChoice() {
    let choice = prompt("Enter 'Rock', 'Paper' or 'Scissors':");
    choice.toLowerCase();
    return choice.charAt(0).toUpperCase() + choice.slice(1);
};

function playOneRound(playerSelection, computerSelection) {
    

    if (playerSelection == "Rock" && computerSelection == "Rock"){
        console.log("Tie!");
    };

    if (playerSelection == "Rock" && computerSelection == "Paper"){
        console.log("You lose!");
        GAMES_WON_PC = GAMES_WON_PC + 1;
    };
    
    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        console.log("You win!");
        GAMES_WON_USER = GAMES_WON_USER + 1;
    };

    if (playerSelection == "Paper" && computerSelection == "Rock"){
        console.log("You win!");
        GGAMES_WON_USER = GAMES_WON_USER + 1;
    };

    if (playerSelection == "Paper" && computerSelection == "Paper"){
        console.log("Tie!");
    };

    if (playerSelection == "Paper" && computerSelection == "Scissors"){
        console.log("You lose!");
        GAMES_WON_PC = GAMES_WON_PC + 1;
    };

    if (playerSelection == "Scissors" && computerSelection == "Rock"){
        console.log("You lose!");
        GAMES_WON_PC = GAMES_WON_PC + 1;
    };

    if (playerSelection == "Scissors" && computerSelection == "Paper"){
        console.log("You win!");
        GAMES_WON_USER = GAMES_WON_USER + 1;
    };

    if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        console.log("Tie!");
    };

    console.log('You chose: ' + playerSelection);
    console.log('Computer chose: ' + computerSelection);
};


function game(number) {
    for (let index = 0; index < number; index++) {
        playOneRound(getPlayerChoice(), getComputerChoice());
        console.log("SCOREBOARD: \n Your score: " + GAMES_WON_USER + " Wins.\n Computer score: " + GAMES_WON_PC + " Wins.")   
    }
}

function main() {
    let number_game = prompt('How many rounds would you like to play?');
    console.log('Playing ' + number_game + ' games...');
    game(number_game);
}

/* console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getPlayerChoice()); */

main();
