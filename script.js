// come back later to add modules for changing the board, to make it private.
const gameBoard = (function() {
    let board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];
    return board;
})();

function newPlayer(name, marker) {
    return { name, marker };
}

const gameController = (() => {
    const player1 = newPlayer("player1", "X");
    const player2 = newPlayer("player2", "O");

    let currentPlayer = player1;

    let currentBoard = gameBoard;
    let oldBoard = structuredClone(currentBoard);

    checkBoard();

    function changeTurns() {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        };
    }

    function getCurrentPlayer() {
        return currentPlayer;
    }

    function checkBoard() {
        for (let col = 0; col < 3; col++) {
            for (let row = 0; row < 3; row++) {
                if (gameBoard[0][col] === currentPlayer.marker) {
                    if (checkVerticalWin(0, col) === true) {
                        console.log("Winner!");
                        break;
                    }
                };

                if (gameBoard[row][0] === currentPlayer.marker) {
                    if (checkHorizontalWin(row, 0) === true) {
                        console.log("Winner!");
                        break;
                    }
                };

                if (gameBoard[1][1] === currentPlayer.marker) {
                    if (checkDiagonalWin() === true) {
                        console.log("Winner!");
                        break;
                    };
                };
            };
        };

        if (!gameBoard.some(row => row.includes(" "))) {
            console.log("tie!")
        };

        if (currentBoard != oldBoard) {
            oldBoard = structuredClone(currentBoard);
            changeTurns();
        };
    }

    function checkVerticalWin(row, col) {
        if (gameBoard[row+1][col] === currentPlayer.marker && gameBoard[row+2][col] === currentPlayer.marker) {
            return true;
        };
    }

     function checkHorizontalWin(row, col) {
        if (gameBoard[row][col+1] === currentPlayer.marker && gameBoard[row][col+2] === currentPlayer.marker) {
            return true;
        };
    }

    function checkDiagonalWin() {
        if (gameBoard[0][0] === currentPlayer.marker && gameBoard[0+2][0+2] === currentPlayer.marker) {
            return true;
        }; 

        if (gameBoard[0][+2] === currentPlayer.marker && gameBoard[0+2][0] === currentPlayer.marker) {
            return true;
        };
    }

    function displayTie() {
        console.log("Tie!")
    }

    return { 
        getCurrentPlayer,
        changeTurns
        };

})();

const displayController = (() => {
    document.addEventListener("click", (e) => {
        const currentPlayer = gameController.getCurrentPlayer();
        let element = e.target

        if (element.classList.contains("board-cell")) {
            element.innerText = currentPlayer.marker;
            console.log("Current player is " + currentPlayer.name);

            let row = 1;
            let col = 1;

            if (element.classList.contains("top")) {
                row = 0;
            }
            
            if (element.classList.contains("bottom")) {
                row = 2;
            }

            if (element.classList.contains("left")) {
                col = 0;
            }

            if (element.classList.contains("right")) {
                col = 2;
            }

            gameBoard[row][col] = currentPlayer.marker

            gameController.changeTurns();

            console.log(gameBoard);
        };
    });
})();