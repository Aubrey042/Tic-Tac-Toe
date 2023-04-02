// Run the game
initializeGame();

// Define initial game state
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let players = [];
let currentPlayer = '';
let gameOver = false;
let playerScores = {
  X: 0,
  O: 0
};


// Define the initial game state
const State = {
  main: []
};


// Player turn swap controler 
function switchPlayer() {
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  console.log(`It is now ${currentPlayer}'s turn.`);

}

//Initialize game
function initializeGame() {
  const playerNames = document.createElement("p");
  playerNames.id = "Player-Names";
  document.body.appendChild(playerNames);

  const input1 = document.createElement("input");
  input1.placeholder = "Player 1 Name";
  playerNames.appendChild(input1);

  const input2 = document.createElement("input");
  input2.placeholder = "Player 2 Name";
  playerNames.appendChild(input2);

  const button = document.createElement("button");
  button.textContent = "Start Game";
  playerNames.appendChild(button);

  button.addEventListener("click", () => {
    players = [input1.value, input2.value];
    currentPlayer = players[0];
    setUpGameBoard();
    console.log(`Game started between ${players[0]} and ${players[1]}!`);
  });
}
// Set up game board
function setUpGameBoard() {
  const body = document.querySelector("body");

  const h1 = document.createElement('h1');
  h1.id = "title";
  h1.innerText = "Tic-Tac-Toe";
  body.appendChild(h1);

  const h3 = document.createElement('h3');
  h3.innerText = 'Winner Takes All';
  body.appendChild(h3);

  const main = document.createElement("main");
  main.id = "Game-Board";
  body.appendChild(main);

  const div1 = document.createElement("div");
  div1.id = "Game-Cells";
  main.appendChild(div1);

  for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");
    div.className = "Game-Cell";
    div1.appendChild(div);

    div.addEventListener("click", () => {
      handleMove(i);
    });
  }
}


//Display game board
function displayGameBoard() {
  const cells = document.querySelectorAll(".Game-Cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = gameBoard[i];
  }
}


//Check Player Moves vs Cell
function handleMove(index) {
  if (gameOver) {
    console.log('Game over!');
    return;
  }
  if (gameBoard[index] !== '') {
    console.log('Space already occupied!');
    return;
  }

  gameBoard[index] = currentPlayer === players[0] ? 'X' : 'O';
  State.main[index] = currentPlayer;

  displayGameBoard();
  checkResult();
  switchPlayer();
}

//Check for win or draw
function checkResult() {
  let message = '';

  //Diagonal Win Check
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
    message = `${currentPlayer} wins!`;
    gameOver = true;
  }
  if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
    message = `${currentPlayer} wins!`;
    gameOver = true;
  }

  //Horizontal Win Check
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    message = `${currentPlayer} wins!`;
    gameOver = true;
  }
  if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    message = `${currentPlayer} wins!`;
    gameOver = true;
  }
  if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    message = `${currentPlayer} wins!`;
    gameOver = true;
  }

  //Vertical Win check 
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
    message = `${currentPlayer} wins!`;
    gameOver = true;
  }
  if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
    message = `${currentPlayer} wins!`;
    gameOver = true;
  }
  if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
    message = `${currentPlayer} wins!`;
    gameOver = true;
  }

  // Win Check Draw
  if (gameBoard.every(cell => cell !== '')) {
    message = 'This Game is a draw!!! Try Again!!!';
    gameOver = true;
  }
  if (gameOver) {
    displayResult(message);
  }
}

// Define variables to track player wins
let player1Wins = 0;
let player2Wins = 0;

// Function to update player win counts
function updatePlayerWins() {
  const player1WinCount = document.querySelector("#player1-win-count");
  player1WinCount.textContent = `Player 1 wins: ${player1Wins}`;

  const player2WinCount = document.querySelector("#player2-win-count");
  player2WinCount.textContent = `Player 2 wins: ${player2Wins}`;
}

// Function to display the game result
function displayResult(message) {
  const result = document.createElement("p");
  result.id = "game-result";
  result.textContent = message;
  document.body.appendChild(result);

  // Update player win counts
  if (message.includes("Player 1")) {
    player1Wins++;
  } else if (message.includes("Player 2")) {
    player2Wins++;
  }
  updatePlayerWins();
}

// Create separate display boxes for each player's win count
const player1WinCount = document.createElement("p");
player1WinCount.id = "player1-win-count";
player1WinCount.textContent = "Player 1 wins: 0";
document.body.appendChild(player1WinCount);

const player2WinCount = document.createElement("p");
player2WinCount.id = "player2-win-count";
player2WinCount.textContent = "Player 2 wins: 0";
document.body.appendChild(player2WinCount);



//Play Again Button
const letsPlayAgainButton = document.createElement("button");
letsPlayAgainButton.textContent = "Lets Play Again!!!";
document.body.appendChild(letsPlayAgainButton);

//Reset game, without Player name removel.
letsPlayAgainButton.addEventListener("click", () => {

  gameBoard = ['', '', '', '', '', '', '', '', ''];
  displayGameBoard();

  gameOver = false;
  currentPlayer = players[0];

  console.log(`New game started between ${players[0]} and ${players[1]}!`);
});

//Play Again Button
const newGameButton = document.createElement("button");
newGameButton.textContent = "New Game!!!";
document.body.appendChild(newGameButton);

//New game, with Player name removel.
newGameButton.addEventListener("click", () => {

  gameBoard = ['', '', '', '', '', '', '', '', ''];
  displayGameBoard();
  
  console.log(`New game started between ${players[0]} and ${players[1]}!`);

 // Reset player names
 const input1 = document.querySelector("input[placeholder='Player 1 Name']");
 const input2 = document.querySelector("input[placeholder='Player 2 Name']");
 input1.value = '';
 input2.value = '';
 
 console.log(`New game started between ${players[0]} and ${players[1]}!`);
});