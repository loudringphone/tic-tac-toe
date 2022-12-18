const cells = document.querySelectorAll('.cell');
let Xs = document.querySelectorAll('.markX');
let Ys = document.querySelectorAll('.markO');


let cons2Win = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
]

const startScreen = document.querySelector('.startScreen');
const congratsBGs = document.querySelectorAll('.congratsBG')


//Character selector
let characters = document.querySelectorAll('.character');
const preview = document.querySelector('.preview');
const btnClose = document.querySelector('.btnClose');
const btnChar = document.querySelector('.btnChar');
const charContainer = document.querySelector('.charContainer')
const mainContent = document.querySelector('.main-content')
const players = document.querySelectorAll('.player')
const playerNames = document.querySelectorAll('.playerName')

let player = players[0]
let playerName = playerNames[0]

btnChar.addEventListener('click', function() {
    startScreen.style.visibility = 'hidden';
    btnChar.style.visibility = 'hidden';
    mainContent.style.visibility = 'hidden';
    charContainer.classList.toggle('change');
    charContainer.style.visibility = 'visible';
    

})

const CharSel = function(){
characters.forEach(target => {
    target.addEventListener('mouseover', function() {
        if (playerName.textContent.includes('Player')) {
            player.src = target.currentSrc;
            preview.style.backgroundImage = `url(${target.currentSrc})`;
            preview.style.filter = "brightness()";
            player.style.filter = "brightness()";
            }
        })
    target.addEventListener('mouseout', function() {
        if (playerName.textContent.includes('Player')) {
            preview.style.filter = "grayscale(100%)";
            player.style.filter = "grayscale(100%)";
        }})
    target.addEventListener('click', function() {
        player.src = target.currentSrc;
        player.style.filter = "brightness()";
        playerName.textContent = target.getAttribute('alt');
        player = players[1];
        playerName = playerNames[1]
        if (!playerName.textContent.includes('Player')) {
            charContainer.classList.toggle('change');
            charContainer.style.visibility = 'hidden';    
            mainContent.style.visibility = 'visible';
        }
        })
    })
}
CharSel()






        
        

    

btnClose.addEventListener('click', function() {
    startScreen.style.visibility = 'visible';
    mainContent.style.visibility = 'visible';
    btnChar.style.visibility = 'visible';
    player = players[0];
    playerName = playerNames[0];
    playerName.textContent = 'Player 1';
    for (let i of players) {
        i.style.filter = "grayscale(100%)";
    }
    charContainer.classList.toggle('change');
    charContainer.style.visibility = 'hidden';

})


//WInning screen
const congratsText = document.querySelector('.congratsText')
const congrats = function() {
    // startScreen.classList.toggle('congrats')
    // startScreen.style.visibility = 'visible';
    // startScreen.style.opacity = 1;
    // startScreen.style.border = '3px solid black';
    // startScreen.style.outline = "3px solid black"; 
    congratsBGs.forEach(target => {
        target.style.visibility = 'visible';
    })

    

    
 


    setInterval(function() {
        startScreen.style.opacity = 0.3;
        startScreen.style.transition = "all 0.3s";
    }, 1000)
    setInterval(function() {
        startScreen.style.opacity = 1;
        startScreen.style.transition = "all 0.5s";
    }, 1500)
}



const winningText = function(winner) {
    if (winner === 'Lone Wolf and Cub') {
        return `${winner} win!`
    } else {return `${winner} wins!`}
}

//Tic Tac Toe
let player1 = []
let player2 = []
let checkP1 = "";
let checkP2 = "";
const scores = document.querySelectorAll('.score')
const tictactoe = function() {
for (let cell of cells) {
    cell.addEventListener('click', function() {
        if (cell.className === 'markX' || cell.className === 'markO') {
            return
        }

        Xs = document.querySelectorAll('.markX');
        Ys = document.querySelectorAll('.markO');
        if (Xs.length === Ys.length) {
            cell.classList.add('markX');
            cell.classList.remove('cell');
            empties = document.querySelectorAll('.cell');
            for (let empty of empties) {
                empty.textContent = "〇"
                empty.classList.toggle('cell2')
            }
            player1.push(parseInt(cell.id))

 
        }
        else {
            cell.classList.add('markO')
            cell.classList.remove('cell');
            cell.classList.remove('cell2');
            empties = document.querySelectorAll('.cell');
            for (let empty of empties) {
                empty.textContent = "X"
                empty.classList.toggle('cell2')
            }
            player2.push(parseInt(cell.id))
        }
    

        for (let i = 0; i < cons2Win.length; i++) {
            checkP1 = ""
            checkP2 = ""
            for (let j of cons2Win[i]){
                if (player1.includes(j)) {
                    checkP1 = checkP1 + 'W'
                    if (checkP1.length === 3) {
                        empties = document.querySelectorAll('.cell2');
                        empties.forEach(target => {
                            target.textContent = "";
                            target.classList.add('markX');
                            target.classList.remove('cell');
                            target.classList.remove('cell2');
                        });
                        alert(winningText(playerNames[0].textContent));
                        congratsText.textContent = winningText(playerNames[0].textContent)
                        scores[0].textContent = `Wins: ${parseInt(scores[0].textContent.split(" ")[1]) + 1}`
                        players[1].style.filter = "grayscale(100%)";
                        congrats()
                        


                        return

                    }
                }
                if (player2.includes(j)) {
                    checkP2 = checkP2 + 'W'
                    if (checkP2.length === 3) {
                        empties = document.querySelectorAll('.cell');
                        empties.forEach(target => {
                            target.textContent = "";
                            target.classList.add('markO');
                            target.classList.remove('cell');
                        });
                        winner = playerNames[1];
                        alert(winningText(playerNames[1].textContent));
                        congratsText.textContent = winningText(playerNames[1].textContent)
                        players[0].style.filter = "grayscale(100%)";
                        congrats()
                        return
                    }
                }
            }
        }
    });
}
}

tictactoe()

