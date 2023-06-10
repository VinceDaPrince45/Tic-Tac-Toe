// playerOne = Player('PlayerOne','X')
// playerTwo = Player('PlayerTwo','O')
// playGame.initializeBoard (creates board/array)
// playGame.gameClock (calls on chooseSpot and evaluateRows and displays winner once evaluateRows hits)
    // function to choose name and marker
    // function to choose bot or player 2
    // choose difficulty
    // pressing on a spot on the grid changes it to marker and removes onclick function
    // alternate turns

const playGame = (() => {
    const Player = (playerName,playerMarker) => {
        return {name:playerName, marker:playerMarker};
    }
    
    const playerOne = Player('playerOne','X');
    const playerTwo = Player('playerTwo','O');

    let gameBoard = [
        '', '', '',
        '', '', '',
        '', '', ''     
    ];

    let playerOneSpots = '';
    let playerTwoSpots = '';
    let currentMarker = playerOne.marker;
    let result = '';

    const spots = document.querySelectorAll('.spot');
    const container = document.querySelector('.container');
    

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
                } else if (playerOneSpots.length == 5 || playerTwoSpots.length == 5) {
                    return result = 'TIE';
                }
            }
        }
    };

    const foo = (e) => {
        if (e.target && e.target.classList.contains('spot') && (gameBoard[e.target.getAttribute('data-name')] == '')) {
            gameBoard[e.target.getAttribute('data-name')] = currentMarker;
            if (currentMarker == playerOne.marker) {
                playerOneSpots += e.target.getAttribute('data-name').toString();
                currentMarker = playerTwo.marker;
            } else if (currentMarker == playerTwo.marker) {
                playerTwoSpots += e.target.getAttribute('data-name').toString();
                currentMarker = playerOne.marker;
            }
            updateBoard();
            evaluateRows();
            if (result !== '') {
                console.log(result);
                container.removeEventListener('click',foo);
            }
        }
    }

    const chooseSpot = () => {
        container.addEventListener('click', foo);
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
playGame.chooseSpot();


// put name factory into module