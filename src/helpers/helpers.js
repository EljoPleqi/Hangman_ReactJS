export function showNotification(setter) {
  setter(true);

  setTimeout(() => {
    setter(false);
  }, 2000);
}

<<<<<<< HEAD
export function checkWin(correctLetters, wrongLetters, word) {
  let status = 'win';

  // Check condition
  word.split('').forEach((letter) => {
    if (!correctLetters.includes(letter)) {
      status = '';
    }
  });

=======
export function getGameStatus(correctLetters, wrongLetters, word) {
  let status = 'win';

  // Check condition
  if (word.split('').some((letter) => !correctLetters.includes(letter))) {
    status = '';
  }
>>>>>>> master
  if (wrongLetters.length >= 7) status = 'lose';

  return status;
}
