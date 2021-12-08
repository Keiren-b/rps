let playerScore = 0

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
                   console.log('Draw, play again')
                //    return playRound()
                   }
               
                else if ((computerSelection==="rock" && playerSelection==="scissors")
               || (computerSelection==="scissors" && playerSelection==="paper")
               || (computerSelection==="paper" && playerSelection==="rock"))
               
            {
                console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection +'. Current score is ' + playerScore);
                    
                }

               
                else {
                playerScore=playerScore+1
                console.log('You Win! ' + playerSelection + ' beats ' + computerSelection +'. Current score is '+playerScore);
               }
            }
        const btn = document.querySelector('#btn')
        btn.addEventListener('click', (event) => {
            playRound('rock', computerSelection())
        })
   
// function game (){
//  return playRound()
// }

// game();
// game();
// game();
// game();
// game();

//this calculates the final result of 5 games
// if (playerScore >=3){
//     console.log ('You win the game. Your final score is ' + playerScore + ' wins out of 5 games')
// }
// else {
//     console.log ('You lose the game. Your final score is ' + playerScore + ' wins out of 5 games')
// }