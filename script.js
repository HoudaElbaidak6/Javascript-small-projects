let button = document.querySelector("button");
let chance, randomNumber, nombretrouve;
console.log("the number was" + randomNumber);
let results = document.getElementById("results");

let buttonStart = document.getElementById("restart-area");

function reset() {
  chance = 3;
  nombretrouve = false;
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log("the number was" + randomNumber);
}
function restart() {
  let res = document.getElementById("restart-area");
  res.style.display = "block";
  let game = document.getElementById("game-area");
  game.style.display = "none";
}
function appearGame() {
  reset();
  let res = document.getElementById("restart-area");
  res.style.display = "none";
  let game = document.getElementById("game-area");
  game.style.display = "block";
  results.textContent = "";
}

reset();
function guessGame() {
  let userGuess = document.querySelector("input");
  nombreSaisie = Number(userGuess.value);
  console.log(chance);

  if (nombreSaisie > randomNumber) {
    results.textContent = `${nombreSaisie} is high ,try a lower number`;
    chance--;
  } else if (nombreSaisie == randomNumber) {
    results.textContent = "You got it right !";
    nombretrouve = true;
    chance = 0;
  } else {
    results.textContent = `${nombreSaisie} is low ,try a higher number`;
    chance--;
  }

  if (chance == 0 && nombretrouve == false) {
    results.textContent = "You lost booo !! ";
    results.style.color = "black";
    results.style.background = "red";
    restart();
  } else if (nombretrouve == true) {
    results.textContent = "You won , good job !! ";
    results.style.color = "white";
    results.style.background = "green";
    restart();
  }

  userGuess.value = "";
}

button.addEventListener("click", guessGame);
buttonStart.addEventListener("click", appearGame);
