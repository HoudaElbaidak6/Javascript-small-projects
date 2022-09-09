let myGuess, chance;

chance = 3;
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("the number was" + randomNumber);

while (chance > 0) {
  do {
   myGuess = Number(prompt("Enter a number btw 1 and 10 "));
  } while (myGuess < 1 || myGuess > 10);

  if (myGuess > randomNumber) {
    alert(`${myGuess} is high ,try a lower number`);
    console.log(`${myGuess} is high ,try a lower number`);
    chance--;
  } else if (myGuess == randomNumber) {
    alert(" You got it Right !!!");
    console.log(" You got it Right !!!");
    // alert("You found it from " + (chance) + " essays")
    // console.log("You found it from " + (chance) + " essays");
    chance = 0;
  } else {
    alert(`${myGuess} is low ,try a higher number`);
    console.log(`${myGuess} is low ,try a higher number`);
    chance--;
  }
  
} 
console.log("the number was" + randomNumber);
alert("the number was" + randomNumber)



