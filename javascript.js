let box = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-game-btn');
let msgWinner = document.querySelector('.msg-winner');
let msg = document.querySelector('#msg');

let player = true; // true = X, false = O
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    box.forEach(box => {
        box.innerText = '';
        box.disabled = false;
    });
    msgWinner.classList.add('hidden');
    player = true;
}

box.forEach((box) => {
    box.addEventListener('click', () => {
        if(player) {
            box.innerText = 'X';
            player = false;
        } else {
            box.innerText = 'O';
            player = true;
        }
        box.disabled = true;
        checkWin();
    });
});

const showwinnerMsg = (winner) => {
    msg.innerText = `CONGRATULATIONS, ${winner} WINS!`;
    msgWinner.classList.remove('hidden');
}

function checkWin() {
    for(let check of winConditions) {
        if(box[check[0]].innerText === box[check[1]].innerText && 
           box[check[1]].innerText === box[check[2]].innerText && 
           box[check[0]].innerText !== '') {
            showwinnerMsg(box[check[0]].innerText);
            box.forEach(b => b.disabled = true);
            return;
        }
    }
}

reset.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', resetGame);