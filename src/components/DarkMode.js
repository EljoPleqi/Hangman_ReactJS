import React from 'react';

const DarkMode = ({ setDarkMode }) => {
  return (
    <div>
      <button onClick={setDarkMode}>Dark Mode</button>
      <input type="checkbox" />
    </div>
  );
};

export default DarkMode;
