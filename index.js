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

    let playerOneSpots = '';
    let playerTwoSpots = '';
    let result = '';

    const spots = document.querySelectorAll('.spot');

    const initializeBoard = () => {
        let counter = 0;
        spots.forEach((spot) => {
            spot.setAttribute('data-name',counter);
            spot.textContent = gameBoard[counter];
            counter += 1;
        });
    };

    
    const evaluateRows = () => {
        const winningConditions = ['012', '345', '678', '036', '147', '258', '048', '246'];
        // let counter = 0;
        if (playerOneSpots.length >= 3 || playerTwoSpots.length >= 3) {
            for (const condition of winningConditions) {
                if (playerOneSpots.includes(condition[0]) && (playerOneSpots.includes(condition[1])) && (playerOneSpots.includes(condition[2]))) {
                    return result = 'Player one wins';
                } else if (playerTwoSpots.includes(condition[0]) && (playerTwoSpots.includes(condition[1])) && (playerTwoSpots.includes(condition[2]))) {
                    return result = 'Player two wins';
                }
            }
            // if (counter == 8) {
            //     console.log('tie')
            // };
        }
    };

    const chooseSpot = (playerOne,playerTwo) => {
        let currentMarker = playerOne.marker;
        const container = document.querySelector('.container')
        container.addEventListener('click', function(e) {
            if (currentMarker == playerOne.marker) {
                if (e.target && e.target.classList.contains('spot')) {
                    if (gameBoard[e.target.getAttribute('data-name')] == '') {
                        gameBoard[e.target.getAttribute('data-name')] = currentMarker;
                        playerOneSpots += e.target.getAttribute('data-name').toString();
                        updateBoard();
                        evaluateRows();
                        currentMarker = playerTwo.marker;
                        if (result !== '') {
                            console.log('done');
                        }
                    }
                }
            } else if (currentMarker == playerTwo.marker) {
                if (e.target && e.target.classList.contains('spot')) {
                    if (gameBoard[e.target.getAttribute('data-name')] == '') {
                        gameBoard[e.target.getAttribute('data-name')] = currentMarker;
                        playerTwoSpots += e.target.getAttribute('data-name').toString();
                        updateBoard();
                        evaluateRows();
                        currentMarker = playerOne.marker;
                        if (result !== '') {
                            console.log('done');
                        }
                    }
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

    return {initializeBoard,chooseSpot}
})();

playGame.initializeBoard();
playGame.chooseSpot(playerOne,playerTwo);