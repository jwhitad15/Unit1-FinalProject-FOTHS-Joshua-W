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
import SignupForm from "./signup-form";


const LoginForm = () => {

    const [formData, setFormData] = useState({ username: "", password: "" });
    const handleChange = (e) => {
        const { username, value } = e.target;
        console.log(`Updating ${username}:`, value);
        setFormData((prevData) => ({...prevData, [username]: value,}));
        setCharacterCount(e.target.value.length);
       };

    // IF-ELSE Statement



    return (
        <div className="login-signup" >
            <h1 className="header">FOTHS</h1>
            <p id="login-title">Login</p>
            <form className="form">

                <label> Username <br /> 
                    <input className="textfield" type="text" name="username" value={formData.username} onChange={handleChange} />
                </label> <br /> <br />

                <label> Password <br />
                    <input className="textfield" type="email" name="email" value={formData.password} onChange={handleChange}/>
                </label> <br /> <br />

                <Button onClick=" document.location='signup-form.jsx' " text="Hover Effect 2" effectType="effect2"/>
               
            </form>


            <form>
     
                <p>Don't have an account? Click <a href="/components/signup-form.jsx">here</a> to signup! </p>
            </form>

        </div>
        
    )

}

export default LoginForm;