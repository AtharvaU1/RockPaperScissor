function computerPlay(){
    let choiceNum = Math.ceil(Math.random()*3);
    let choiceString = choiceNum == 1 ? "rock" : choiceNum == 2 ? "paper" : "scissor";
    return choiceString;
}

function captilizeFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}

function play(playerSelection, computerSelection){
    let result;
    if(playerSelection==computerSelection){
        playerSelection = captilizeFirst(playerSelection);
        result = `It's a tie! Both chose ${playerSelection}`;
    }
    if(playerSelection=="rock" && computerSelection=="scissor"){
        result = "You Win! Rock beats Scissor";
    }else if(playerSelection=="rock" && computerSelection=="paper"){
        result = "You Lose! Rock loses to Paper";
    }else if(playerSelection=="paper" && computerSelection=="rock"){
        result = "You Win! Paper beats Rock";
    }else if(playerSelection=="paper" && computerSelection=="scissor"){
        result = "You Lose! Paper loses to Scissor";
    }else if(playerSelection=="scissor" && computerSelection=="paper"){
        result = "You Win! Scissor beats Paper";
    }else if(playerSelection=="scissor" && computerSelection=="rock"){
        result = "You Lose! Scissor loses to Rock";
    }

    return result;
}

function game(){
    let playerWin = 0, computerWin = 0;

    let n = prompt("How many rounds do you want to play?", '');
    n = Number(n);
    for(let i = 0 ; i < n ; i++){
        let playerChoice = prompt("Enter your choice : rock, paper or scissor.");
        playerChoice = playerChoice.toLowerCase();
        if(!(playerChoice=="rock" || playerChoice=="paper" || playerChoice=="scissors")){
            alert("Please enter accurate spelling of your choice");
        }else console.log(play(playerChoice, computerPlay()));
    }
}

game();