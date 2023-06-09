const playGame = (() => {
    let gameboard = [
        '' , '' , '' ,
        '' , '' , '' ,
        '' , '' , '' 
    ];
    // function to choose name and marker
    // function to choose bot or player 2
    // choose difficulty
    // pressing on a spot on the grid changes it to marker and removes onclick function
    // alternate turns
    let gridCounter = 0;
    let turns = 0;
    let game = true;
    // placholder to get game to work
    let playerOneMarker = 'X';
    let playerTwoMarker = '0'
    // gameClock
});

// function to choose name and marker
const Player = (playerName,playerMarker) => {
    return {name:playerName, marker:playerMarker};
} 

// function to choose spot on board
function chooseSpot(spot,marker) {
    spot.textContent = marker;    
}


// function to keep game running and laternate turns
const gameClock = (() => {
    let counter = 0;
    game = true;
    while (game) {
        if (counter%2 == 0) {
        // if counter is even let one player play
        } else if (counter%2 !== 0) {
        // if counter odd let other player play
        }
        // function to update board
        // function to evaluate who wins
    }
});

function evaluateRows(gameBoard) {
    let counter = 0;
    for (const grid of gameboard) {
        if (grid == 'X') || (grid == 'O') {
            counter += 1;
        }
    }
    if (counter == 9) {
        return 'TIE'
    } else if ((gameBoard[0] ==  gameBoard[1] == gameBoard[2] !== '') || (gameBoard[3] == gameBoard[4] == gameBoard[5] !== '') || (gameBoard[6] ==  gameBoard[7] == gameBoard[8] !== '') || (gameBoard[0] ==  gameBoard[3] == gameBoard[6] !== '') || (gameBoard[1] ==  gameBoard[4] == gameBoard[7] !== '') || (gameBoard[2] ==  gameBoard[5] == gameBoard[8] !== '') || (gameBoard[0] ==  gameBoard[4] == gameBoard[8] !== '') || (gameBoard[2] ==  gameBoard[4] == gameBoard[6] !== '')) {
        return 'Winner';
    }   
}