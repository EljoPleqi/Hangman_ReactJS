import React, { useEffect } from 'react';

import axios from 'axios';

<<<<<<< HEAD
const GetWord = ({ darkMode, correctLetters, word, setWord }) => {
=======
const GetWord = ({ correctLetters, word, setWord }) => {
>>>>>>> master
  useEffect(() => {
    axios
      .get(`https://random-word-api.herokuapp.com/word?number=1&swear=0`)
      .then((data) => {
        console.log(data);
<<<<<<< HEAD
        const word = data.data[0].toUpperCase();
=======
        const word = data.data[0];
>>>>>>> master
        setWord(word);
      });
  }, []);

  return (
    <div className="word">
      {word.split('').map((letter, index) => {
        return (
<<<<<<< HEAD
          <span
            className={`letter ${darkMode ? 'letter-dark' : 'letter-light'}`}
            key={index}
          >
=======
          <span className="letter" key={index}>
>>>>>>> master
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        );
      })}
    </div>
  );
};

export default GetWord;
