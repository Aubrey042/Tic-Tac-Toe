// Defines state of the Game
const State = {
  main: []
};

// Creates an array that represents the empty game board
for (let i = 0; i < 9; i++) {
  State.main.push(null);
}

// Creates the UI elements for the game board
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

// Defines a variable to keep track of whose turn it is
let currentPlayer = "X";

// Creates the game cells using loop
for (let i = 0; i < 9; i++) {
  const div = document.createElement("div");
  div.className = "Game-Cell";
  div1.appendChild(div);

  // Event listener for each cell to allow players to place their symbol
  div.addEventListener("click", () => {
    // If the cell is already occupied, do nothing
    if (State.main[i] !== null) {
      return;
    }

    // Otherwise, update the cell with the current player symbol
    div.textContent = currentPlayer;
    State.main[i] = currentPlayer;

    // Switch to the other player turn
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
}

// creates UI elements for player names and a start button
const playerNames = document.createElement("p");
playerNames.id = "Player-Names";
body.appendChild(playerNames);

const input1 = document.createElement("input");
input1.placeholder = "Player 1 Name";
playerNames.appendChild(input1);

const input2 = document.createElement("input");
input2.placeholder = "Player 2 Name";
playerNames.appendChild(input2);

const button = document.createElement("button");
button.textContent = "Start Game";
playerNames.appendChild(button);
