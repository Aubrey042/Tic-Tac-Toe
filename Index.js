// --------------State-------------
const State = {};
State.main = [];

// initialize each element to null or empty string
for (let i = 0; i < 9; i++) {
  State.main.push(null);
}

console.log(State);


// ---------------DOM Selector--------------
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
}

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
