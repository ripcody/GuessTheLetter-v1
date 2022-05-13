//Store Random Letter
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let rnd = parseInt(Math.random() * 26);
let secretLetter = alphabet[rnd];
let numGuesses = 5;

//
let usersGuess = prompt('I am thinking of a letter. Can you guess it? You have ' + numGuesses + ' Guess/es.').substring(0, 1).toUpperCase();

//#region First Guess

if (secretLetter == usersGuess) {
  alert('Congratulations! The secret letter is ' + secretLetter);
}
else {

  if (secretLetter < usersGuess) {
    alert('The secret letter is before ' + usersGuess);
  }
  else {
    alert('The secret letter is after ' + usersGuess);
  }
  numGuesses--
  //#endregion 
  //#region Second Guess
  usersGuess = prompt('Try again you have ' + numGuesses + ' Guesses left').substring(0, 1).toUpperCase();
  if (secretLetter == usersGuess) {
    alert('Congratulations! The secret letter is ' + secretLetter);
  }
  else {

    if (secretLetter < usersGuess) {
      alert('The secret letter is before ' + usersGuess);
    }
    else {
      alert('The secret letter is after ' + usersGuess);
    }
    numGuesses--
    //#endregion 
    //#region Third Guess
    usersGuess = prompt('Try again you have ' + numGuesses + ' Guesses left').substring(0, 1).toUpperCase();
    if (secretLetter == usersGuess) {
      alert('Congratulations! The secret letter is ' + secretLetter);
    }
    else {

      if (secretLetter < usersGuess) {
        alert('The secret letter is before ' + usersGuess);
      }
      else {
        alert('The secret letter is after ' + usersGuess);
      }
      numGuesses--
      //#endregion
      //#region Fourth Guess
      usersGuess = prompt('Try again you have ' + numGuesses + ' Guesses left').substring(0, 1).toUpperCase();
      if (secretLetter == usersGuess) {
        alert('Congratulations! The secret letter is ' + secretLetter);
      }
      else {

        if (secretLetter < usersGuess) {
          alert('The secret letter is before ' + usersGuess);
        }
        else {
          alert('The secret letter is after ' + usersGuess);
        }
        numGuesses--
        //#endregion
        //#region Fifth Guess
        usersGuess = prompt('Try again you have ' + numGuesses + ' Guesses left').substring(0, 1).toUpperCase();

        if (secretLetter == usersGuess) {
          alert('Congratulations! The secret letter is ' + secretLetter);
        }
        else
          alert('You are out of guesses the secret letter is ' + secretLetter);
        //#endregion
      }
    }
  }
}

