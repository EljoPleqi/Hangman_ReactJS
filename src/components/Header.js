import React from 'react';
import DarkMode from './DarkMode';

const Header = ({ setDarkMode }) => {
  return (
    <div>
      <h1>Hangman</h1>
      <DarkMode setDarkMode={setDarkMode} />
      <p>Find the hidden word - Enter a letter</p>
    </div>
  );
};

export default Header;
