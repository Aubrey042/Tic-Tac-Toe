function hideStartContainer() {
    var startContainer = document.getElementById("start-container");
    startContainer.style.display = "none";
  }
  
  // Run the game
  initializeGame();
  
  // Define initial game 
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
    const playerNames = document.createElement("div");
    playerNames.id = "Player-Names";
    document.body.appendChild(playerNames);
  
    const input1 = document.createElement("input");
    input1.placeholder = "Player 1 Name";
    input1.id = "player1-name";
    playerNames.appendChild(input1);
  
    const input2 = document.createElement("input");
    input2.placeholder = "Player 2 Name";
    input2.id = "player2-name";
    playerNames.appendChild(input2);
  
    const button = document.createElement("button");
  button.textContent = "Start Game";
  playerNames.appendChild(button);
  button.id = "start-button";
  
  button.addEventListener("click", function() {
    hideStartContainer();
    button.style.display = "none";
  });
  
  
    const handleButtonClick = () => {
      players = [input1.value, input2.value];
      currentPlayer = players[0];
      setUpGameBoard();
      console.log(`Game started between ${players[0]} and ${players[1]}!`);
  
      // Remove event listener from the button
      button.removeEventListener("click", handleButtonClick);
    };
  
    button.addEventListener("click", handleButtonClick);
  }
  
  // Set up game board
  function setUpGameBoard() {
    const body = document.querySelector("body");
  
    
  
  
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
  
  // Variables to track player wins
  let player1Wins = 0;
  let player2Wins = 0;
  
  // Update player win counts
  function updatePlayerWins() {
    const player1WinCount = document.querySelector("#player1-win-count");
    player1WinCount.textContent = `Player 1 wins: ${player1Wins}`;
  
    const player2WinCount = document.querySelector("#player2-win-count");
    player2WinCount.textContent = `Player 2 wins: ${player2Wins}`;
  }
  
  // Display the game result
  function displayResult(message) {
    const result = document.createElement("p");
    result.id = "game-result";
    result.textContent = message;
    document.body.appendChild(result);
  
    // Update player win counts
    if (message.includes("Player 1")) {
      playerScores.X++;
    } else if (message.includes("Player 2")) {
      playerScores.O++;
    }
  
    // Display player scores
    const player1Score = document.createElement("span");
    player1Score.id = "player1-score";
    player1Score.textContent = `Player 1: ${playerScores.X}`;
    document.body.appendChild(player1Score);
  
    const player2Score = document.createElement("span");
    player2Score.id = "player2-score";
    player2Score.textContent = `Player 2: ${playerScores.O}`;
    document.body.appendChild(player2Score);
  
    // Add "Play again" button
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play again";
    document.body.appendChild(playAgainButton);
  
    // Event listener to "Play again" button
    playAgainButton.addEventListener("click", () => {
      // Reset game board
      gameBoard = ['', '', '', '', '', '', '', '', ''];
      currentPlayer = players[0];
      gameOver = false;
      State.main = [];
  
      // Remove result message and player scores
      result.remove();
      player1Score.remove();
      player2Score.remove();
  
      // Remove "Play again" button
      playAgainButton.remove();
  
      // Reset game board display
      displayGameBoard();
    });
  }
  
  
  
  
  
    
  
  
  
 