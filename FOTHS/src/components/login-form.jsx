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
import React from "react";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import './button-animation.css';


const LoginForm = () => {
        
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

            <form className="login-form" onSubmit={handleSubmit}>

                <label> Username <br /> 
                    <input className="textfield" type="text" name="username" onChange={handleChange} required />
                    <CiUser className="icon" />
                </label> <br /> 

                <label> Password <br />
                    <input className="textfield" type="password" name="password" onChange={handleChange} required />
                    <CiLock className="icon" />
                </label> <br /> 

                <div className="remember-forgot">
                    <label>
                        <input className="checkbox" type="checkbox" /> Remember me
                    </label>
                </div> <br/>

                <a href="./#/dashboard" class="button-class" text="Hover Effect 2" effecttype="effect2" >Login</a> 
               
            </form>

            <form >
     
                <p>Don't have an account? Click <a id="hyperlink" href="/#/signup">here</a> to signup! </p>

            </form>

        </div>
        
    )

}

export default LoginForm;

