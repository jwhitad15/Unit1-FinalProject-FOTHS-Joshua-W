import React from 'react';
import './button-animation.css';

const SignupButton = ({ text, effecttype }) => {

  
  return (
    <button id="login" style={{ margin: "10px" }} className={`custom-button ${effecttype}`}>
      Signup
    </button>
  );
};

export default SignupButton;  
