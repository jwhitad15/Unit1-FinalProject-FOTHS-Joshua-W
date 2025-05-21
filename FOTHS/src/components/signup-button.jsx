import { useState } from "react";

// const LoginButton = () => {

//     const [login, setLogin] = useState(false);
//     const handleLogin = (e) => {
//         login ? setLogin(false) : setLogin(true);
//     }

//     return (
//         <button type="login" id="login" onClick={handleLogin} >Login</button>
//     )
//     //     {login ? <p>welp</p> : <p>schmelp</p>}
//     // )

// }

// Button.jsx

import React from 'react';
import './Test.css';

const SignupButton = ({ text, effectType }) => {
  return (
    <button id="login" style={{ margin: "10px" }} className={`custom-button ${effectType}`}>
      Signup
    </button>
  );
};

export default SignupButton;  
