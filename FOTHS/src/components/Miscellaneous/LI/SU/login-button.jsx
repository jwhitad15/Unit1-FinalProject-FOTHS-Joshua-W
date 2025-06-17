import React from 'react';
import { Link } from "react-router-dom";
import './button-animation.css';
import Dashboard from "../../../dashboard";

const Button = ({ text, effecttype }) => {

  return (
    <Link>
    <button onClick={<Dashboard/>} id="login" style={{ margin: "10px" }} className={`custom-button ${effecttype}`} effecttype="effect2"> Login </button>
    </Link>
  );
};

export default Button;  
// export default LoginButton; 