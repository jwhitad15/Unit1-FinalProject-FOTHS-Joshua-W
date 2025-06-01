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
// import Button from './login-button.jsx'


const StartFoths = () => {

       

       
    
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
            <p id="login-title">Fruits of the Holy Spirit</p>

            <form className="login-form" onSubmit={handleSubmit}>

            <h4 className="start-page-text">To start the application, press the button below!</h4>
                <a href="./#/dashboard" class="button-class" text="Hover Effect 2" effecttype="effect2" >Start</a> 

                {/* <Button onClick={handleSubmit} text="Hover Effect 2" effectType="effect2"/> */}
               
            </form>


        </div>
        
    )

}

export default StartFoths;

