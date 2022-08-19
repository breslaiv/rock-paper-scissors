const ROCK = "Rock!";
const PAPER = "Paper!";
const SCISSORS = "SCISSORS";

function getComputerChoice(){
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

