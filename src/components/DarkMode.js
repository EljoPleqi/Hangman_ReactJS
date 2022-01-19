import React from 'react';
import './toggleButton.css';

const DarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <p>Dark mode {`${darkMode ? 'on' : 'off'}`}</p>
      <label className="toggle-button">
        <input type="checkbox" onChange={setDarkMode} />
        <span className="slider" />
      </label>
    </div>
  );
};

export default DarkMode;
