// Button.jsx

import React from 'react';
import './Test.css';

const Button = ({ text, effectType }) => {
  return (
    <button style={{ margin: "10px" }} className={`custom-button ${effectType}`}>
      {text}
    </button>
  );
};

export default Button;  