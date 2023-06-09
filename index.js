function evaluateRows(gameBoard) {
    let counter = 0;
    for (const grid of gameboard) {
        if ((grid == 'X') || (grid == 'O')) {
            counter += 1;
        }
    }
    if (counter == 9) {
        return 'TIE'
    } else if ((gameBoard[0] ==  gameBoard[1] == gameBoard[2] !== '') || (gameBoard[3] == gameBoard[4] == gameBoard[5] !== '') || (gameBoard[6] ==  gameBoard[7] == gameBoard[8] !== '') || (gameBoard[0] ==  gameBoard[3] == gameBoard[6] !== '') || (gameBoard[1] ==  gameBoard[4] == gameBoard[7] !== '') || (gameBoard[2] ==  gameBoard[5] == gameBoard[8] !== '') || (gameBoard[0] ==  gameBoard[4] == gameBoard[8] !== '') || (gameBoard[2] ==  gameBoard[4] == gameBoard[6] !== '')) {
        return 'Winner';
    }   
}


// playerOne = Player('PlayerOne','X')
// playerTwo = Player('PlayerTwo','O')
// playGame.initializeBoard (creates board/array)
// playGame.gameClock (calls on chooseSpot and evaluateRows and displays winner once evaluateRows hits)
    // function to choose name and marker
    // function to choose bot or player 2
    // choose difficulty
    // pressing on a spot on the grid changes it to marker and removes onclick function
    // alternate turns

const Player = (playerName,playerMarker) => {
    return {name:playerName, marker:playerMarker};
}

const playerOne = Player('playerOne','X');
const playerTwo = Player('playerTwo','O')

const playGame = ((playerOne,playerTwo) => {
    let gameBoard = [
        '', '', '',
        '', '', '',
        '', '', ''     
    ]
    const spots = document.querySelectorAll('.spot');

    const initializeBoard = () => {
        let counter = 0;
        spots.forEach((spot) => {
            spot.setAttribute('data-name',counter);
            spot.textContent = array[counter];
            counter += 1;
        });
    };

    const evaluateRows = (array) => {
        let counter = 0;
        for (const grid of array) {
            if ((grid == 'X') || (grid == 'O')) {
                counter += 1;
            }
        }
        if (counter == 9) {
            return 'TIE'
        } else if ((array[0] ==  array[1] == array[2] !== '') || (array[3] == array[4] == array[5] !== '') || (array[6] ==  array[7] == array[8] !== '') || (array[0] ==  array[3] == array[6] !== '') || (array[1] ==  array[4] == array[7] !== '') || (array[2] ==  array[5] == array[8] !== '') || (array[0] ==  array[4] == array[8] !== '') || (array[2] ==  array[4] == array[6] !== '')) {
            return 'Winner';
        }
    };

    const chooseSpot = (marker) => {
        spots.forEach((spot) => {
            spot.onclick = function(e) {
                if (e.target && e.target.classList.contains('spot')) {
                    gameBoard[e.target.getAttribute('data-name')] = marker;
                }
            }
        });
    };

    const gameClock = () => {
        let counter = 0;
        game = true;
        while (game) {
            if (counter % 2 == 0) {
                // player 1 turn
            } else if (counter % 2 !== 0) {
                // player 2 turn
            }
        }
    };
})();

playGame.chooseSpot;
