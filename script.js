'strict mode';
let player1, gameEnded;

const init = function () {
  player1 = 'X';
  gameEnded = false;
  // document.querySelector('.btn-new').classList.add('transition');
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`${i}`).textContent = '';
    document.getElementById(`${i}`).classList.remove('x');
    document.getElementById(`${i}`).classList.remove('o');
    document.getElementById(`${i}`).classList.remove('win');
    document.getElementById(`${i}`).classList.remove('object');
  }
  document.getElementById('body').classList.remove('body');
};
init();
console.log(player1);
const winner = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
const checkWin = function () {
  for (let i = 0; i < winner.length; i++) {
    if (
      document.getElementById(winner[i][0]).textContent === player1 &&
      document.getElementById(winner[i][1]).textContent === player1 &&
      document.getElementById(winner[i][2]).textContent === player1
    ) {
      document.getElementById(winner[i][0]).classList.add('win');
      document.getElementById(winner[i][1]).classList.add('win');
      document.getElementById(winner[i][2]).classList.add('win');
      gameEnded = true;
      document.getElementById('body').classList.add('body');
    }
  }
};
const gameLogic = function () {
  if (this.textContent === '' && !gameEnded) {
    this.textContent = player1;
    this.classList.add(player1.toLowerCase());
    this.classList.add('object');
    checkWin();
    if (player1 === 'X') {
      player1 = 'O';
    } else {
      player1 = 'X';
    }
  }
};

document.querySelector('.btn-new').addEventListener('click', init);
for (let i = 1; i <= 9; i++) {
  document.getElementById(`${i}`).addEventListener('click', gameLogic);
}
