export function showNotification(setter) {
  setter(true);

  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function getGameStatus(correctLetters, wrongLetters, word) {
  let status = 'win';

  // Check condition
  if (word.split('').some((letter) => !correctLetters.includes(letter))) {
    status = '';
  }
  if (wrongLetters.length >= 7) status = 'lose';

  return status;
}
