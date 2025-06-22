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
import { useNavigate, Link } from "react-router";
import { CiUser, CiLock } from "react-icons/ci";


const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: ""});
    const [isNotValid, setIsNotValid] = useState(false);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((input) => ({...input, [name]: value}));
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.username.includes('admin_') && (formData.password === 'Admin:User!')) {
        setTimeout(() => {navigate('/fetch')}, 500)
        } else {
           setIsNotValid(true);
        }

    }

    return (
        <div className="login-signup" >
            <h1 className="header">FOTHS</h1>
            <p id="login-title">Administrative Login</p>

            <form className="login-form" onSubmit={handleSubmit}>

                <label> Username <br /> 
                    <CiUser className="icon" />
                    <input className="textfield" type="text" name="username" value={formData.username} onChange={handleChange} required />
                </label> <br /> 

                <label> Password <br />
                    <CiLock className="icon" />
                    <input className="textfield" type="password" name="password" value={formData.password} onChange={handleChange} required />
              
                </label> <br /> <br />

                  {isNotValid && (
                    <p style={{fontSize:"14px", color: 'red' }}> Invalid username and/or password. Please check credentials. </p> )}

                <button type="submit" className="button-class">Login</button>
               
            </form>

            <form >
     
                <p>Don't have an account? Click  <Link id="card-hyperlink" to="/dashboard">here</Link> to return to the application! </p>

            </form>

        </div>
        
    )

}

export default LoginForm;

