// Math random returns a random number between 1 and 100
var secretNumber = Math.floor((Math.random() * 100) + 1)
var guess = Number(prompt("This is a guessing game, choose a number from 1 - 100. 10 failed attempts and it's game over."))
var guesses = 1
var tries = 10

while(guess != secretNumber) {
  console.log(guesses);
  if (guesses >= tries) {
    console.log("You lose. The secrect number was " + secretNumber);
    break
  } else if (guess > secretNumber) {
    guesses++
    guess = prompt("Guess Lower")
  } else if (guess < secretNumber) {
    guesses++
    guess = prompt("Guess Higher")
  }
}

if (guesses < tries) {
  console.log("You got it, and it only took you " + guesses + " guesses");
}
