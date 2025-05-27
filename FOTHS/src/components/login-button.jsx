import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import './Test.css';

const Button = ({ text, effectType }) => {

  return (
    <Link>
    <button id="login" style={{ margin: "10px" }} className={`custom-button ${effectType}`}> Login </button>
    </Link>
  );
};

export default Button;  
// export default LoginButton; 