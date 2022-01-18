import React, { useEffect } from 'react';

import axios from 'axios';

const GetWord = ({ correctLetters, word, setWord }) => {
  useEffect(() => {
    axios
      .get(`https://random-word-api.herokuapp.com/word?number=1&swear=0`)
      .then((data) => {
        console.log(data);
        const word = data.data[0];
        setWord(word);
      });
  }, []);

  return (
    <div className="word">
      {word.split('').map((letter, index) => {
        return (
          <span className="letter" key={index}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        );
      })}
    </div>
  );
};

export default GetWord;
