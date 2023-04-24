const game = document.querySelector(".game")
const block = document.querySelectorAll(".block")
const turn = document.querySelector("#turn")
const player = document.querySelector("#player")


var accessGame = true


var turnX = true

function fillBlock(element) {
  

    if(element.innerText == "" && turnX) {
        element.innerText = "X"
        player.innerText = "O"
        turnX = false
    }

    if(element.innerText == "" && !turnX) {
        element.style.color = "red"
        element.innerText = "O"
        player.innerText = "X"
        turnX = true
    }

    
}

function controlBlocks() {
    const values = []
    block.forEach(block => {
        values.push(block.textContent)
    })
    if(!values.includes("")) {
        turn.innerHTML = "Tie !!!"
        accessGame = false
    }
}

function controlRow() {
    if(block[0].textContent == block[1].textContent && block[0].textContent == block[2].textContent && block[0].textContent != "") {
        return false
    }
    else if(block[3].textContent == block[4].textContent && block[3].textContent == block[5].textContent && block[3].textContent != "") {
        return false
    }
    else if(block[6].textContent == block[7].textContent && block[6].textContent == block[8].textContent && block[6].textContent != "") {
        return false
    }
    else {
        return true
    }
}

function controlColumn() {
    if(block[0].textContent == block[3].textContent && block[0].textContent == block[6].textContent && block[0].textContent != "") {
        return false
    }
    else if(block[1].textContent == block[4].textContent && block[1].textContent == block[7].textContent && block[1].textContent != "") {
        return false
    }
    else if(block[2].textContent == block[5].textContent && block[2].textContent == block[8].textContent && block[2].textContent != "") {
        return false
    }
    else {
        return true
    }
}


function controlDiagonal() {
    if(block[0].textContent == block[4].textContent && block[0].textContent == block[8].textContent && block[0].textContent != "") {
        return false
    }
    else {
        return true
    }
}




function controlGame() {
    let row = controlRow()
    let column = controlColumn()
    let diagonal = controlDiagonal()
    if(!row || !column || !diagonal) {
        if(turnX) {
            turn.innerHTML = `Game Over. O is Winner !!! `
        }
        else {
            turn.innerHTML = `Game Over. X is Winner !!! `
        }
      accessGame = false
    }

    


}

game.addEventListener("click",function(e) {
    const element = e.target
    
    if(accessGame) {
        fillBlock(element)
        controlBlocks()
        controlGame()
    }
   

})

