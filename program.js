const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

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
    };
    
    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        console.log("You win!");
    };

    if (playerSelection == "Paper" && computerSelection == "Rock"){
        console.log("You win!");
    };

    if (playerSelection == "Paper" && computerSelection == "Paper"){
        console.log("Tie!");
    };

    if (playerSelection == "Paper" && computerSelection == "Scissors"){
        console.log("You lose!");
    };

    if (playerSelection == "Scissors" && computerSelection == "Rock"){
        console.log("You lose!");
    };

    if (playerSelection == "Scissors" && computerSelection == "Paper"){
        console.log("You win!");
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
