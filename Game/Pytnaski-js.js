const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const restart = document.getElementById('restart');
const refresh = document.getElementById('refresh');
const availableGames = [
    [12, 4, 9, 8, 10, 13, 5, 3, 0, 2, 15, 11, 7, 6, 1, 14],
    [10, 8, 13, 14, 3, 6, 4, 9, 11, 15, 0, 12, 1, 2, 5, 7],
    [13, 4, 10, 8, 3, 9, 6, 2, 15, 12, 14, 11, 7, 0, 5, 1],
    [4, 13, 10, 5, 1, 0, 6, 7, 14, 12, 2, 11, 8, 15, 3, 9],
    [12, 10, 9, 11, 15, 0, 5, 6, 1, 2, 13, 4, 3, 7, 14, 8],
    [2, 10, 4, 5, 14, 0, 3, 13, 12, 9, 6, 1, 8, 11, 15, 7],
    [6, 14, 9, 12, 1, 10, 2, 7, 13, 4, 0, 11, 3, 15, 5, 8],
    [11, 6, 3, 15, 10, 9, 5, 7, 14, 8, 0, 12, 13, 4, 2, 1],
    [13, 8, 10, 14, 3, 4, 6, 7, 9, 0, 11, 15, 5, 1, 2, 12],
    [9, 1, 2, 12, 3, 6, 5, 0, 7, 10, 11, 4, 14, 8, 13, 15]
];

function getRandomGame() {
    const arrr = arr.map(x => x);
    let newGame = [];
    let n = 15;
    for (let i = 0; i < 16; i++) {
        const num = Number(arrr.splice(Math.round(Math.random() * n), 1));
        newGame.push(num);
        n--;
    }
    return newGame;
}

let score = 0;

let game = getRandomGame();

function playGame(pytnaski) {
    for (let i = 0; i < 16; i++) {
        const td = document.getElementById(`${i + 1}`);
        td.innerText = pytnaski[i];
        if (pytnaski[i] == 0) {
            td.innerText = "";
        }
    }
    score = 0;
}

playGame(game);
restart.addEventListener('click', function () {
    playGame(game);
});

restart.addEventListener('mousedown', function (){
    restart.classList.toggle('button-click');
});

restart.addEventListener('mouseup', function (){
    restart.classList.toggle('button-click');
});

refresh.addEventListener('click', function () {
    game = availableGames[Math.round(Math.random() * 10)];
    playGame(game);
});

refresh.addEventListener('mousedown', function (){
    refresh.classList.toggle('button-click');
});

refresh.addEventListener('mouseup', function (){
    refresh.classList.toggle('button-click');
});

const td = document.getElementsByTagName('td');
for (let i = 0; i < td.length; i++) {
    switch (i) {
        case 0:
            td[0].addEventListener('click', function () {
                if (td[0].innerText != 0 && td[1].innerText == 0) {
                    td[1].innerText = td[0].innerText;
                    td[0].innerText = "";
                    score++;
                } else if (td[0].innerText != 0 && td[4].innerText == 0) {
                    td[4].innerText = td[0].innerText;
                    td[0].innerText = "";
                    score++;
                }
            });
            break;
        case 1:
        case 2:
            td[i].addEventListener('click', function () {
                if (td[i].innerText != 0 && td[i - 1].innerText == 0) {
                    td[i - 1].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                } else if (td[i].innerText != 0 && td[i + 1].innerText == 0) {
                    td[i + 1].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                } else if (td[i].innerText != 0 && td[i + 4].innerText == 0) {
                    td[i + 4].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                }
            });
            break;
        case 3:
            td[i].addEventListener('click', function () {
                if (td[3].innerText != 0 && td[2].innerText == 0) {
                    td[2].innerText = td[3].innerText;
                    td[3].innerText = "";
                    score++;
                } else if (td[3].innerText != 0 && td[7].innerText == 0) {
                    td[7].innerText = td[3].innerText;
                    td[3].innerText = "";
                    score++;
                }
            });
            break;
        case 4:
        case 8:
            td[i].addEventListener('click', function () {
                if (td[i].innerText != 0 && td[i - 4].innerText == 0) {
                    td[i - 4].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                } else if (td[i].innerText != 0 && td[i + 1].innerText == 0) {
                    td[i + 1].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                } else if (td[i].innerText != 0 && td[i + 4].innerText == 0) {
                    td[i + 4].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                }
            });
            break;
        case 5:
        case 6:
        case 9:
        case 10:
            td[i].addEventListener('click', function () {
                if (td[i].innerText != 0 && td[i - 4].innerText == 0) {
                    td[i - 4].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                } else if (td[i].innerText != 0 && td[i - 1].innerText == 0) {
                    td[i - 1].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                } else if (td[i].innerText != 0 && td[i + 1].innerText == 0) {
                    td[i + 1].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                } else if (td[i].innerText != 0 && td[i + 4].innerText == 0) {
                    td[i + 4].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                }
            });
            break;
        case 7:
        case 11:
            td[i].addEventListener('click', function () {
                if (td[i].innerText != 0 && td[i - 4].innerText == 0) {
                    td[i - 4].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                } else if (td[i].innerText != 0 && td[i - 1].innerText == 0) {
                    td[i - 1].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                } else if (td[i].innerText != 0 && td[i + 4].innerText == 0) {
                    td[i + 4].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                }
            });
            break;
        case 12:
            td[12].addEventListener('click', function () {
                if (td[12].innerText != 0 && td[13].innerText == 0) {
                    td[13].innerText = td[12].innerText;
                    td[12].innerText = "";
                    score++;
                } else if (td[12].innerText != 0 && td[8].innerText == 0) {
                    td[8].innerText = td[12].innerText;
                    td[12].innerText = "";
                    score++;
                }
            });
            break;
        case 13:
        case 14:
            td[i].addEventListener('click', function () {
                if (td[i].innerText != 0 && td[i - 1].innerText == 0) {
                    td[i - 1].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                } else if (td[i].innerText != 0 && td[i + 1].innerText == 0) {
                    td[i + 1].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                } else if (td[i].innerText != 0 && td[i - 4].innerText == 0) {
                    td[i - 4].innerText = td[i].innerText;
                    td[i].innerText = "";
                    score++;
                }
            });
            break;
        case 15:
            td[15].addEventListener('click', function () {
                if (td[15].innerText != 0 && td[14].innerText == 0) {
                    td[14].innerText = td[15].innerText;
                    td[15].innerText = "";
                    score++;
                } else if (td[15].innerText != 0 && td[11].innerText == 0) {
                    td[11].innerText = td[15].innerText;
                    td[15].innerText = "";
                    score++;
                }
            });
            break;
    }
    td[i].addEventListener('mousedown', function () {
        td[i].classList.toggle('down');
    });
    td[i].addEventListener('mouseup', function () {
        td[i].classList.toggle('down');
    });
}

const checkStr = "123456789101112131415";
const Score = document.getElementById('score-num');

const intervalId = setInterval(() => {
    Score.innerText = score;
    let str = "";
    for (let i = 0; i < 15; i++) {
        str += td[i].innerText;
    }
    if (str === checkStr) {
        clearInterval(intervalId);
        alert(`Вы победили!!!`);
        
    }
}, 100);
