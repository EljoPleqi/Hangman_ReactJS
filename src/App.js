import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import GetWord from './components/GetWord';
import PopUp from './components/PopUp';
import Notification from './components/Notification';
import { showNotification as show } from './helpers/helpers';

import './App.css';

function App() {
  const [word, setWord] = useState('');
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleInput = (e) => {
      const { key, keyCode } = e;

      if (playable && keyCode >= 65 && keyCode <= 90) {
<<<<<<< HEAD
        const letter = key.toUpperCase();
=======
        const letter = key.toLowerCase();
>>>>>>> master

        if (word.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((correctLetters) => [...correctLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener('keydown', handleInput);
    return () => window.removeEventListener('keydown', handleInput);
  }, [word, correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    window.location.reload();
  };

  function setDarkModeHandle() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`container container-bg-${darkMode ? 'dark' : 'light'}`}>
<<<<<<< HEAD
      <Header setDarkMode={setDarkModeHandle} darkMode={darkMode} />
=======
      <Header setDarkMode={setDarkModeHandle} />
>>>>>>> master
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} darkMode={darkMode} />
        <WrongLetters wrongLetters={wrongLetters} />
        <GetWord
          word={word}
          correctLetters={correctLetters}
          setWord={setWord}
          darkMode={darkMode}
        />
      </div>
      <PopUp
        setPlayable={setPlayable}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        word={word}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;
