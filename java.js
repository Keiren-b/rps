let playerScore = 0
let computerScore = 0

            //computerPlay randomly selects either Rock, Paper or Scissors 

            const computerSelection = function computerPlay(){
               
               const myArray = [
                       "rock",
                       "paper",
                       "scissors",]
           
               return myArray[Math.floor(Math.random()*myArray.length)]
               }
   
           //playerPlay asks for an imput through the prompt box
            //    function playerPlay(){
            //         playerSelection1 = prompt('Enter Rock, Paper or Scissors', )
            //         return playerSelection1.toLowerCase()
            //     }
         
            //playRound plays 1 round of the game and console logs the result. If you win, 1 point is added to playerScore
           function playRound(playerSelection, computerSelection) {
                // let playerSelection = playerPlay()
                // let computerSelection = computerPlay()

          
                if (playerSelection===computerSelection){
                  
                div.textContent = "Draw, play again. Current score is...Player Score: " + playerScore + '. Computer Score: ' + computerScore
                                //    return playRound()
                   }
               
                else if ((computerSelection==="rock" && playerSelection==="scissors")
               || (computerSelection==="scissors" && playerSelection==="paper")
               || (computerSelection==="paper" && playerSelection==="rock"))
               
            {
                computerScore = computerScore + 1
                div.textContent = 'You Lose! ' + computerSelection + ' beats ' + playerSelection + '. Current score is...Player Score: ' + playerScore + ". Computer Score: " + computerScore
                    
                }

               
                else {
                playerScore=playerScore+1
                div.textContent = 'You Win! ' + playerSelection + ' beats ' + computerSelection + '. Current score is...Player Score: ' + playerScore + ". Computer Score: " + computerScore
               }

               if (playerScore==5){
                div.textContent = "YOU WIN!!! Score is...Player Score: " + playerScore + ". Computer Score: " + computerScore;
                
                
            }

            else if (computerScore==5){
                div.textContent = "YOU LOSE!! Score is...Player Score: " + playerScore + ". Computer Score: " + computerScore;
                
            }
            }

const container = document.querySelector('#container')            

        const btn1 = document.querySelector('#btn1')
        btn1.addEventListener('click', (e) => {     
            if (playerScore<5 && computerScore<5){      
            playRound('rock', computerSelection())
        }})
    
    

        const btn2 = document.querySelector('#btn2')
        btn2.addEventListener('click', (e) => {
            if (playerScore<5 && computerScore<5){ 
            playRound('paper', computerSelection())
        }})

        const btn3 = document.querySelector('#btn3')
        btn3.addEventListener('click', (e) => {
            if (playerScore<5 && computerScore<5){ 
            playRound('scissors', computerSelection())

        }})

const div = document.createElement('div');
container.appendChild(div)

