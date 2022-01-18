import React from 'react';
<<<<<<< HEAD
import './toggleButton.css';

const DarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <p>Dark mode {`${darkMode ? 'on' : 'off'}`}</p>
      <label className="toggle-button">
        <input type="checkbox" onChange={setDarkMode} />
        <span className="slider" />
      </label>
=======

const DarkMode = ({ setDarkMode }) => {
  return (
    <div>
      <button onClick={setDarkMode}>Dark Mode</button>
      <input type="checkbox" />
>>>>>>> master
    </div>
  );
};

export default DarkMode;
