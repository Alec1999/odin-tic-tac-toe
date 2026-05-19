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

(function gameController() {
    const player1 = newPlayer("player1", "X");
    const player2 = newPlayer("player2", "O");

    let p1Win = false;
    let p2Win = false;

    // function to control turns
        // turn starts on p1
        // turn changed to p2

    // when p1 turn, put down p1 marker
        // if p2 turn, put down p2 marker
    
    gameBoard[0][2] = player1.marker;
    gameBoard[1][1] = player1.marker;
    gameBoard[2][0] = player1.marker;

    for (let i = 0; i < 9; i++) {
            if (gameBoard[1][1] = "X") {
                if (checkDiagonalWin() === true) {
                    console.log("Winner!");
                    break;
                }
        };
    };

    // if gameBoard[n][0] contains "X", check horizontal win

    // if gameBoard[0][n] contains "X", check vertical win

    // horizonal win
        // if gameBoard[n][0+1] and gameBoard[n][0+2] = "X", win

    // vertical win
        // if gameBoard[0+1][n] and gameBoard[0+2][n] = "X", win 
    
    function checkDiagonalWin() {
        if (gameBoard[0][0] === "X" && gameBoard[0+2][0+2] === "X") {
            return true;
            console.log("p1Win = " + p1Win);
        }; 

        if (gameBoard[0][+2] === "X" && gameBoard[0+2][0] === "X") {
            return true;
            console.log("p1Win = " + p1Win);
        };
    };
    // diagonal win
        // if gameBoard [0+1][0+1] = "X", 
            // if gameBoard[0][0] = "X", and gameBoard[0+2][0+2] = X, win.
            // if gameBoard[0][+2] = "X", and gameBoard[0+2][0] = "X", win.
})();