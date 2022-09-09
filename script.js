let button = document.querySelector("button");

function guessNumber() {
  let yourGuess = document.querySelector("input").value;
  let output = document.getElementById("results").value;
  let numberReveal = document.getElementById("numberReveal").value;

  let randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log("the number was" + randomNumber);

  for (let i = 0; i < 3; i++) {
    if (yourGuess == randomNumber) {
      output.textContent = "Your got it right  ";

      console.log("Damn girl !! You got it Right !!!");
      console.log("You found it from " + (i + 1) + " essays");
      break;
    } else if (yourGuess > randomNumber) {
      output.textContent = ` ${yourGuess} is high ,try a lower number`;
      console.log(`${yourGuess} is high ,try a lower number`);
    } else {
      output.textContent = `${yourGuess} is low ,try a higher number`;
      console.log(`${yourGuess} is low ,try a higher number`);
    }
  }

  numberReveal.textContent = `The number was ${randomNumber} `;
  console.log("the number was" + randomNumber);
}

button.addEventListener("click", guessNumber);
