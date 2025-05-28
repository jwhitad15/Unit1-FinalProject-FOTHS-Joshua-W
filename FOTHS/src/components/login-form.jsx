// This component will be the first screen users see.
// It will initially prompt users to login with just a username & password.
// If the user inputs an appropriate username & password and clicks the 'Login' button, it will take the user to the Dashboard Page.
// However, if the user is new, they can click the highlighted text link located underneath the form container, which will update the pop-up card to prompt the 
    // user for extra information. 

// I need this component to remember & recall the user's username & password.
// I need the username & password fields to ensure validation according to the input conditions I set.
// I need the text link below the Login Card to dynamically update expand into a bigger card, which will allow the user to input required Account Creation information. 
// I need the Login Card to be separated and raised from the background of the page.
// I need a picture embedded into the Login Card for user-friendliness.

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./login-button";
import React from "react";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import './button-animation.css';


const LoginForm = () => {

       

       
    
        function handleClick (){
            const navigate = navigate();
            navigate("/dashboard")
        }
        
    const [input, setInput] = useState({ username: "", password: ""});
   
   

    
    const handleChange = (event) => {
        const { username, value } = event.target;
        setInput((input) => ({...input, [username]: value}));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }



    return (
        <div className="login-signup" >
            <h1 className="header">FOTHS</h1>
            <p id="login-title">Login</p>

            <form className="form" onSubmit={handleSubmit}>

                <label> Username <br /> 
                    <input className="textfield" type="text" name="username" value={input.username || ""} onChange={handleChange} required />
                    <CiUser className="icon" />
                </label> <br /> 

                <label> Password <br />
                    <input className="textfield" type="password" name="password" value={input.password || ""} onChange={handleChange} required />
                    <CiLock className="icon" />
                </label> <br /> 

                <div className="remember-forgot">
                    <label>
                        <input className="checkbox" type="checkbox" /> Remember me
                    </label>
                </div> <br/>

                {/* <button onClick={handleClick} id="login" text="Hover Effect 2" effectteype="effect2">sdf</button> */}

                
                <a href="./dashboard" class="button-class">Login</a> 
                {/* <Button onClick={handleSubmit} text="Hover Effect 2" effectType="effect2"/> */}
                {/* <script type="text/javascript"> document.getElementById("myButton").onclick = function () {href = "./dashboard"};</script> */}
               
            </form>

            <form >
     
                <p>Don't have an account? Click <a id="hyperlink" href="/signup">here</a> to signup! </p>
            </form>

            {/* <script>
            document.getElementByClass("login-signup").addEventListener("submit", ((event)=> {
                event.preventDefault()
            }))
            </script> */}

        </div>
        
    )

}

export default LoginForm;

