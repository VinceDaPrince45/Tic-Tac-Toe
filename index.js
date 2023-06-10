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
const playerTwo = Player('playerTwo','O');

const playGame = ((playerOne,playerTwo) => {
    let gameBoard = [
        '', '', '',
        '', '', '',
        '', '', ''     
    ];
    let game = true;
    const spots = document.querySelectorAll('.spot');

    const initializeBoard = () => {
        let counter = 0;
        spots.forEach((spot) => {
            spot.setAttribute('data-name',counter);
            spot.textContent = gameBoard[counter];
            counter += 1;
        });
    };

    
    const evaluateRows = (array) => {
        if ((array[0] ==  array[1] == (array[2] !== '')) || (array[3] == array[4] == (array[5] !== '')) || (array[6] ==  array[7] == (array[8] !== '')) || (array[0] ==  array[3] == (array[6] !== '')) || (array[1] ==  array[4] == (array[7] !== '')) || (array[2] ==  array[5] == (array[8] !== '')) || (array[0] ==  array[4] == (array[8] !== '')) || (array[2] ==  array[4] == (array[6] !== ''))) {
            game = false;
            console.log(gameBoard);
            console.log('WINNER');
        } else if (array.includes('')) {
            console.log('IN GAME');
        } else {
            game = false;
            console.log('TIE');
        }
    };

    const chooseSpot = (playerOne,playerTwo) => {
        let counter = 0;
        let currentMarker;
        const container = document.querySelector('.container')
        container.addEventListener('click', function(e) {
            while (game) {
                if (counter % 2 == 0) {
                    currentMarker = playerOne.marker;
                    if (e.target && e.target.classList.contains('spot')) {
                        gameBoard[e.target.getAttribute('data-name')] = currentMarker;
                        updateBoard();
                        evaluateRows(gameBoard);
                        
                    }
                    counter += 1;
                } else if (counter % 2 !== 0) {
                    currentMarker = playerTwo.marker;
                    if (e.target && e.target.classList.contains('spot')) {
                        gameBoard[e.target.getAttribute('data-name')] = currentMarker;
                        updateBoard();
                        evaluateRows(gameBoard);
                    }
                    counter += 1;
                }
            }
        })
    };

    const updateBoard = () => {
        let counter = 0;
        spots.forEach((spot) => {
            spot.setAttribute('data-name',counter);
            spot.textContent = gameBoard[counter];
            counter += 1;
        });
    };

    const gameClock = (playerOne,playerTwo) => {
    };

    return {initializeBoard,chooseSpot}
})();

// playGame.initializeBoard();
// playGame.chooseSpot(playerOne,playerTwo);


let gameBoard = [
    'X', 'X', 'X',
    '', '', '',
    '', '', ''     
]
console.log('' !== gameBoard[0] !== gameBoard[1] !== gameBoard[2]);

// validate winner
let playerOneSpots = '';
let playerTwoSpots = '';

// concatenate number to string when selected
const winningConditions = ['012', '345', '678', '036', '147', '258', '048', '246'];

for (const condition of winningConditions) {
    if (playerOneSpots.includes(condition[0]) && (playerOneSpots.includes(condition[1])) && (playerOneSpots.includes(condition[2]))) {
        console.log('Player one wins');
    } else if (playerTwoSpots.includes(condition[0]) && (playerTwoSpots.includes(condition[1])) && (playerTwoSpots.includes(condition[2]))) {
        console.log('Player two wins');
    } else console.log("Tie");
}
