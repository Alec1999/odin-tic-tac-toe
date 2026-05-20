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

    let currentBoard = gameBoard;
    let oldBoard = structuredClone(currentBoard);

    let currentPlayer = player1;

    function changeTurns() {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        };
    }

    function checkBoard() {
        for (let col = 0; col < 3; col++) {
            for (let row = 0; row < 3; row++) {
                if (gameBoard[0][col] === "X") {
                    if (checkVerticalWin(0, col) === true) {
                        console.log("Winner!");
                        break;
                    }
                };

                if (gameBoard[row][0] === "X") {
                    if (checkHorizontalWin(row, 0) === true) {
                        console.log("Winner!");
                        break;
                    }
                };

                if (gameBoard[1][1] === "X") {
                    if (checkDiagonalWin() === true) {
                        console.log("Winner!");
                        break;
                    };
                };
            };
        };

        if (currentBoard != oldBoard) {
            oldBoard = structuredClone(currentBoard)
            changeTurns();
        };
    }

    function checkVerticalWin(row, col) {
        if (gameBoard[row+1][col] === "X" && gameBoard[row+2][col] === "X") {
            return true;
        };
    }

     function checkHorizontalWin(row, col) {
        if (gameBoard[row][col+1] === "X" && gameBoard[row][col+2] === "X") {
            return true;
        };
    }

    function checkDiagonalWin() {
        if (gameBoard[0][0] === "X" && gameBoard[0+2][0+2] === "X") {
            return true;
        }; 

        if (gameBoard[0][+2] === "X" && gameBoard[0+2][0] === "X") {
            return true;
        };
    }
})();