export function showNotification(setter) {
  setter(true);

  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correctLetters, wrongLetters, word) {
  let status = 'win';

  // Check condition
  word.split('').forEach((letter) => {
    if (!correctLetters.includes(letter)) {
      status = '';
    }
  });

  if (wrongLetters.length >= 7) status = 'lose';

  return status;
}
