let createPlayer = (sign, cellsChosen, turn = false) => { return {sign,cellsChosen,turn,} }
let player1 = createPlayer("X", [], true)
let player2 = createPlayer("O", [] )
let gameboard = ['','','','','','','','','']
let allCells = document.querySelectorAll(".game-cell")
let gameboardDisplay = document.querySelector(".game-board")

allCells = Array.from(allCells)

let plays = -1;
let wonText = document.querySelector(".won")


winOptions = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,6]

]

function checkWinner(){

    let playersList = [player1, player2]

    for (i in playersList){

        for (option in winOptions){
            let correct = 0;
            for (num in winOptions[option]){
                if(playersList[i].cellsChosen.includes(winOptions[option][num])){

                    ++correct
                }
            }

            if(correct >= 3){
                console.log("player " + playersList[i].sign + ' won!')
                wonText.textContent = "player " + playersList[i].sign + ' won!'
                plays = 0
                gameboardDisplay.style.pointerEvents = 'none'
                gameboardDisplay.style.backgroundImage = 'linear-gradient(220deg, rgba(121, 121, 121,0.5),rgba(196, 186, 186,0.5))';

                return true
            }
          
        }

    }

    plays++

    if (plays > 9){
        wonText.textContent = "Its a draw!"
        gameboardDisplay.style.pointerEvents = 'none'

        gameboardDisplay.style.backgroundImage = 'linear-gradient(220deg, rgba(121, 121, 121,0.5),rgba(196, 186, 186,0.5))';

        
    }
}

function updateBoard(){


    for (cell in allCells){
        allCells[cell].textContent = gameboard[cell]
    }

    checkWinner()
}

for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("click",function(){

        if(!gameboard[i]){

            if (player1.turn == true){

                gameboard[i] = player1.sign
                player1.cellsChosen.push(i)
                player1.turn = false

                updateBoard()
    
            }else{
                gameboard[i] = player2.sign
                player2.cellsChosen.push(i)
                player1.turn = true

                updateBoard()
    
            }

        }
    })
   

    
}

function resetGame(){
    player1 = createPlayer("X", [], true)
    player2 = createPlayer("O", [] )
    gameboard = ['','','','','','','','','']
    wonText.textContent = 'Waiting for a result...'
    gameboardDisplay.style.pointerEvents = 'all'
    plays = 0
    gameboardDisplay.style.backgroundImage = "linear-gradient(220deg, rgb(40, 40, 122),grey)"
    updateBoard()
    
}


let resetBtn = document.querySelector("button")

resetBtn.addEventListener("click", resetGame)
updateBoard()