let createPlayer = (sign, cellsChosen, turn = false) => { return {sign,cellsChosen,turn,} }

let player1 = createPlayer("X", [], true)
let player2 = createPlayer("O", [] )

let gameboard = ['','','','','','','','','']
let allCells = document.querySelectorAll(".game-cell")
allCells = Array.from(allCells)

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
                return true
            }
          
        }

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
updateBoard()

