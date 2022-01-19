import React, { useEffect } from 'react';
import { getGameStatus } from '../helpers/helpers';

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

  if (
    getGameStatus(correctLetters, wrongLetters, word) === 'win' &&
    correctLetters.length > 0
  ) {
    finalMessage = ' Wow! You won';
    playable = false;
  } else if (getGameStatus(correctLetters, wrongLetters, word) === 'lose') {
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
