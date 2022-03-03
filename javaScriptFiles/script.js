
const nodeListOfButtons = document.querySelector('.threeButtons').querySelectorAll('div');
const resultDiv = document.querySelector('.result');
const yourScore = document.querySelector('.yourScore');
console.log(yourScore);
const opponentsScore = document.querySelector('.opponentsScore');

nodeListOfButtons.forEach(button => {
    button.addEventListener('click', play);
});

let playerWin = 0, computerWin = 0;
// scoreDiv.setAttribute('style', 'white-space: pre;'); // \r\n will not work without this
yourScore.textContent = 'Your score : 0';
opponentsScore.textContent = 'Opponent Score : 0';

function computerPlay(){
    let choiceNum = Math.ceil(Math.random()*3);
    let choiceString = choiceNum == 1 ? "Rock" : choiceNum == 2 ? "Paper" : "Scissor";
    return choiceString;
}

function playround(playerSelection, computerSelection){
    let result;
    let whoWon = 0;
    if(playerSelection==computerSelection){
        result = `It's a tie! Both chose ${playerSelection}`;
    }
    else if(playerSelection[0]=="R" && computerSelection[0]=="S" || playerSelection[0]=="P" && computerSelection[0]=="R"  || playerSelection[0]=="S" && computerSelection[0]=="P"){
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        whoWon = 1;
    }else if(playerSelection[0]=="Rock" && computerSelection[0]=="P" || playerSelection[0]=="P" && computerSelection[0]=="S" || playerSelection[0]=="S" && computerSelection[0]=="R"){
        result = `You Lose! ${playerSelection} loses to ${computerSelection}`;
        whoWon = 2;
    }

    resultDiv.textContent = result;
    return whoWon;
}

function play(){
    const didPlayerWin = playround(this.className, computerPlay());
    
    if(didPlayerWin == 1) playerWin++;
    else if(didPlayerWin == 2) computerWin++;

    yourScore.textContent = `Your score : ${playerWin}`;
    opponentsScore.textContent = `Opponents Score : ${computerWin}`;
    
    if(playerWin == 5 || computerWin == 5){
        if(playerWin == 5) {
            resultDiv.textContent = 'Congrats! You have won this round :)';
        }else if(computerWin == 5){
            resultDiv.textContent = 'You lost this round :( Better luck next time!'
        }    

        playerWin = 0;
        computerWin = 0;
    }
}