// come back later to add modules for changing the board, to make it private.
const gameBoard = (function() {
    let board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ] 
    console.log(board);
    return board;
})();

function newPlayer(name, marker) {
    return { name, marker };
}

// object for game flow (Which turn is it?)
(function gameController() {
    const player1 = newPlayer("player1", "X");
    const player2 = newPlayer("player2", "O");

    // function to control turns
        // turn starts on p1
        // turn changed to p2

    // when p1 turn, put down p1 marker
        // if p2 turn, put down p2 marker
    
    gameBoard[1][1] = player1.marker;

})();