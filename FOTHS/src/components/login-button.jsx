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

const Button = ({ text, effectType }) => {
  return (
    <button style={{ margin: "10px" }} className={`custom-button ${effectType}`}>
      Login
    </button>
  );
};

export default Button;  
// export default LoginButton;