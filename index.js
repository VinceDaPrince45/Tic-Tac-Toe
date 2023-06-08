
// create array for the grid
const gameBoard = (() => {
    board = [
     '.' , '.', '.',
     '.' , '.', '.',
     '.' , '.', '.'
    ];
    const spots = document.querySelectorAll('.spot');
    let counter = 0;
    for (const spot of spots) {
        spot.classList.add('grid');
        spot.classList.add(counter);
        spot.addEventListener('click', function () {
            // create function to choose spot
        })
    }
    return {board}
})();

// create two players
// within player module, create functions that alternates turns and allows each player
//  to choose a place to put down "X" or "O"
const Player = (name,marker) => {

}

// takes turns
const gameClock = (() => {
    let counter = 0;
    game = true;
    while (game) {
        if (counter%2 == 0) {
        // if counter is even let one player play
        } else if (counter%2 !== 0) {
        // if counter odd let other player play            
        }
    }
});

// display board function
const displayBoard = (() => {
    
})