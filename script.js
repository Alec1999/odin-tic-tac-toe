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
    gameBoard[1][2] = player1.marker;
    gameBoard[2][2] = player1.marker;

    for (let col = 0; col < 3; col++) {
        for (let row = 0; row < 3; row++) {
            if (gameBoard[0][col] === "X") {
                if (checkVerticalWin(0, col) === true) {
                    console.log("Winner!");
                    p1Win = true;
                    break;
                }
            };

            // if gameBoard[n][0] contains "X", check horizontal win    

            if (gameBoard[1][1] === "X") {
                if (checkDiagonalWin() === true) {
                    console.log("Winner!");
                    p1Win = true;
                    break;
                };
            };
        };
    };

    function checkVerticalWin(row, col) {
        if (gameBoard[row+1][col] === "X" && gameBoard[row+2][col] === "X") {
            return true;
        }
        else {
            return false;
        };
    }

    // horizonal win
        // if gameBoard[n][0+1] and gameBoard[n][0+2] = "X", win

    function checkDiagonalWin() {
        if (gameBoard[0][0] === "X" && gameBoard[0+2][0+2] === "X") {
            return true;
        }; 

        if (gameBoard[0][+2] === "X" && gameBoard[0+2][0] === "X") {
            return true;
        };
    }
})();