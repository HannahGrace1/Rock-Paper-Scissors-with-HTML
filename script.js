
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreDiv = document. querySelector('.player-score')
const computerScoreDiv = document.querySelector ('.computer-score')
const playAgainButton = document.querySelector ('.playAgain')





let playerPoints=0;
let computerPoints=0;
let i =0;
playAgainButton.addEventListener('click',() => location.reload());

// Code for computer. Randomly selects rock paper or scissors.
function computerPlay(computerSelection){
  let choices=['Rock','Paper','Scissors']
 let pick= choices[Math.floor(Math.random()*choices.length)];
  return pick
}

// This code is for a single round of Rock Paper Scissors. Declares winner of the round.
function singleRound(playerSelection,computerSelection){
  
   playerSelection= playerSelection.toUpperCase();

  
       if (playerSelection === 'ROCK' && computerSelection ==='Paper') { 
      computerPoints++;
         
         const p = document.createElement('p')
      p.innerText="Rock does not beat Paper! ";
         outcomeDiv.appendChild(p)
         
    }
    
        else if (playerSelection === 'ROCK' && computerSelection ==='Scissors'){
      playerPoints++;
          
          const p = document.createElement('p')
     p.innerText= "Rock beats Scissors! FTW!";
          outcomeDiv.appendChild(p)
          
    }   
      else if (playerSelection === 'SCISSORS' && computerSelection ==='Paper') {
      playerPoints++;
        
        const p = document.createElement('p')
       p.innerText="Scissors Beats Paper! Way to go!";
        outcomeDiv.appendChild(p)
      }
          
    
      else if (playerSelection === 'SCISSORS' && computerSelection ==='Rock') {
      computerPoints++;
        
        const p = document.createElement('p')
       p.innerText="Scissors does not beat Rock!";
         outcomeDiv.appendChild(p)
      }
      
        
      else if (playerSelection === 'PAPER'&& computerSelection === 'Rock'){
      playerPoints++;
        
        const p = document.createElement('p')
      p.innerText= " Great job! Paper beats Rock";
         outcomeDiv.appendChild(p)
      }
      
    else if (playerSelection === 'PAPER'&& computerSelection=='Scissors') {
     
      computerPoints++;
      
      const p = document.createElement('p')
       p.innerText="Paper does not beat Scissors! ";
       outcomeDiv.appendChild(p)
      }
      
      else if (playerSelection === computerSelection ) {
        
        const p = document.createElement('p')
      p.innerText=" Tie Round!";
         outcomeDiv.appendChild(p)
        
      
    }
        }




const updateScores =(playerPoints, computerPoints) =>{
  playerScoreDiv.innerText= `Player Score: ${playerPoints}`
  computerScoreDiv.innerText= `Computer Score: ${computerPoints}`
  playerScoreDiv. style = "text-align:center;"
  computerScoreDiv. style = "text-align:center;"
 
}



  rockButton.addEventListener('click', () => {
  const computerSelection = computerPlay();
  const playerSelection = 'rock'
  singleRound(playerSelection,computerSelection);
  endOfGame(playerPoints, computerPoints);
  updateScores (playerPoints, computerPoints);
})
paperButton.addEventListener('click', () => {
  const computerSelection = computerPlay()
  const playerSelection = 'paper'
  singleRound(playerSelection,computerSelection);
  updateScores (playerPoints, computerPoints);
  endOfGame(playerPoints, computerPoints);
})
scissorsButton.addEventListener('click', () => {
  const computerSelection = computerPlay()
  const playerSelection = 'scissors'
  singleRound(playerSelection,computerSelection);
  updateScores (playerPoints, computerPoints);
  endOfGame(playerPoints, computerPoints);
})
  


function endOfGame(){
  if (playerPoints === 5 ){
const h4= document.createElement('h4')
    h4.classList.add('player-won')
     h4.innerText= "Yay! You won the game!";
      outcomeDiv.append(h4)

    rockButton.setAttribute("disabled", 1);
  paperButton.setAttribute("disabled", 1);
  scissorsButton.setAttribute("disabled", 1);

    
    }
    
    else if (computerPoints === 5) {
      const h4= document.createElement('h4')
    h4.classList.add('computer-won')
      h4.innerText= "Sorry :/ You lost the game.";
  outcomeDiv.append(h4)

  rockButton.setAttribute("disabled", 1);
  paperButton.setAttribute("disabled", 1);
  scissorsButton.setAttribute("disabled", 1);

     
      }
}


 endOfGame();


