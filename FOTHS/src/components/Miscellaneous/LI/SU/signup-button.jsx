import React from 'react';

const SignupButton = ({ text, effecttype }) => {

  
  return (
    <button id="login" style={{ margin: "10px" }} className={`custom-button ${effecttype}`}>
      Signup
    </button>
  );
};

export default SignupButton;  
