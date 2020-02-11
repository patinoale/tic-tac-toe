/*----- constants -----*/
const winningPoss = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];

/*----- app's state (variables) -----*/
let boardgame;
let playerTurn = 'x';
let winner;

/*----- cached element references -----*/

const blocks = Array.from(document.querySelectorAll('#gameBoard div'));
//selects all of the div children


/*----- event listeners -----*/

document.getElementById('gameBoard').addEventListener('click', playMade);
let message = document.querySelector('h2');
document.getElementById('replay').addEventListener('click', startGame);

/*----- functions -----*/


function startGame () {
    gameBoard = [
        '0','1','2',
        '3','4','5',
        '6','7','8',
    ];
    render();
};

function render() {
    gameBoard.forEach(function(x, i) {
        //console.log(x,i);
        blocks[i].textContent = x;
    });
    message.textContent = winner === 'Tie' ? "It's a tie" : winner ? (winner + " is the winner!") : ( playerTurn + "'s turn!");
};


function findWinner() {
    let gameWon = null;
    winningPoss.forEach(function(combo, idx){
        if (gameBoard[combo[0]] && gameBoard[combo[0]] === gameBoard[combo[1]] && gameBoard[combo[0]] === 
            gameBoard[combo[2]]) gameWon = gameBoard[combo[0]];
    });
    return gameWon ? gameWon:gameBoard.includes('') ? null : 'Tie';
}



function playMade () {
    let idx = blocks.findIndex(function(block){
        return block === event.target;
    });
    gameBoard[idx] = playerTurn;
    playerTurn = playerTurn === 'x' ? 'o' : 'x';
    winner = findWinner();
    render();

    //console.log(gameBoard);
};



startGame();

