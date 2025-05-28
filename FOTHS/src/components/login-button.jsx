import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import './button-animation.css';
import Dashboard from "./dashboard";

const Button = ({ text, effecttype }) => {

  return (
    <Link>
    <button onClick={<Dashboard/>} id="login" style={{ margin: "10px" }} className={`custom-button ${effecttype}`}> Login </button>
    </Link>
  );
};

export default Button;  
// export default LoginButton; 