let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let rnd = parseInt(Math.random() * 26);
let secretLetter = alphabet[rnd];

let usersGuess = prompt('I am thinking of a letter. Can you guess it?');

if (secretLetter == usersGuess)
  alert('Congratulations! The secret letter is ' + secretLetter);

else {

  if (secretLetter < usersGuess)
    alert('The secret letter is before ' + usersGuess);

  if (secretLetter > usersGuess)
    alert('The secret letter is after ' + usersGuess);

  usersGuess = prompt('Try again you have 4 guesses left');
  if (secretLetter == usersGuess)
    alert('Congratulations! The secret letter is ' + secretLetter);

  else {

    if (secretLetter < usersGuess)
      alert('The secret letter is before ' + usersGuess);

    if (secretLetter > usersGuess)
      alert('The secret letter is after ' + usersGuess);

    usersGuess = prompt('Try again you have 3 guesses left');
    if (secretLetter == usersGuess)
      alert('Congratulations! The secret letter is ' + secretLetter);

    else {

      if (secretLetter < usersGuess)
        alert('The secret letter is before ' + usersGuess);

      if (secretLetter > usersGuess)
        alert('The secret letter is after ' + usersGuess);

      usersGuess = prompt('Try again you have 2 guesses left');
      if (secretLetter == usersGuess)
        alert('Congratulations! The secret letter is ' + secretLetter);

      else {

        if (secretLetter < usersGuess)
          alert('The secret letter is before ' + usersGuess);

        if (secretLetter > usersGuess)
          alert('The secret letter is after ' + usersGuess);

        usersGuess = prompt('Try again you have 1 guess left');

        if (secretLetter == usersGuess)
          alert('Congratulations! The secret letter is ' + secretLetter);

        else
          alert('Sorry the secret letter is ' + secretLetter);
      }
    }
  }
}