import React, { useEffect } from 'react';
<<<<<<< HEAD
import { checkWin } from '../helpers/helpers';
=======
import { getGameStatus } from '../helpers/helpers';
>>>>>>> master

const PopUp = ({
  playAgain,
  setPlayable,
  word,
  correctLetters,
  wrongLetters,
}) => {
  let finalMessage = '';
  let showWord = '';
  let playable = true;

<<<<<<< HEAD
  if (checkWin(correctLetters, wrongLetters, word) === 'win') {
    finalMessage = ' Wow! You won';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, word) === 'lose') {
=======
  if (getGameStatus(correctLetters, wrongLetters, word) === 'win') {
    finalMessage = ' Wow! You won';
    playable = false;
  } else if (getGameStatus(correctLetters, wrongLetters, word) === 'lose') {
>>>>>>> master
    finalMessage = ' Nope, sorry you lost';
    showWord = `The answer is ${word}`;
    playable = false;
  }
  useEffect(() => setPlayable(playable));
  return (
    <div
      className="popup-container"
      style={finalMessage !== '' ? { display: 'flex' } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{showWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default PopUp;
