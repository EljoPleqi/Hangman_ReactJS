import React from 'react';
import DarkMode from './DarkMode';
import './header.css';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <div className="header-container">
        <h1>Hangman</h1>
        <DarkMode setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>
      <p>Find the hidden word - Enter a letter</p>
    </div>
  );
};

export default Header;
