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

const playGame = (() => {
    let gameBoard = [
        '', '', '',
        '', '', '',
        '', '', ''     
    ];

    let playerOneSpots = '';
    let playerTwoSpots = '';
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
                }
            }
            // if (counter == 8) {
            //     console.log('tie')
            // };
        }
    };

    const chooseSpot = (playerOne,playerTwo) => {
        let currentMarker = playerOne.marker;
        container.addEventListener('click', function(e) {
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
                if (result !== '') {console.log(result)}
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



// let gameBoard = [
//     '', '', '',
//     '', '', '',
//     '', '', ''     
// ];

// let currentMarker = playerOne.marker;

// const spots = document.querySelectorAll('.spot');

// let counter = 0;
// spots.forEach((spot) => {
//     spot.setAttribute('data-name',counter);
//     spot.textContent = gameBoard[counter];
//     counter += 1;
// });

// function foo(e) {
//     console.log(e.target);
//     if (e.target && e.target.classList.contains('spot') && (gameBoard[e.target.getAttribute('data-name')] == '')) {
//         console.log('this is a grid');
//         gameBoard[e.target.getAttribute('data-name')] = currentMarker;
//         if (currentMarker == playerOne.marker) {
//             currentMarker = playerTwo.marker;
//         } else if (currentMarker == playerTwo.marker) {
//             currentMarker = playerOne.marker;
//         }
//     }
// }

// const container = document.querySelector('.container');
// container.addEventListener('click', foo);

// put name factory into module