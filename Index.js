
// Define initial game state
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let players = [];
let currentPlayer = '';
let gameOver = false;

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

//Display the game result
function displayResult(message) {
  const result = document.createElement("p");
  result.id = "game-result";
  result.textContent = message;
  document.body.appendChild(result);
}





// Function to start new game
function startNewGame() {}
 



// Run the game
initializeGame();