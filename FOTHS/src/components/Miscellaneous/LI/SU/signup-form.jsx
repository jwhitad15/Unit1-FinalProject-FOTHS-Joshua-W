// This component will only be seen if the user clicks the text link below the Login Card.
// This component will expand the Login Card into a bigger Signup Card, which will allow users to create an account.
// Once the user correctly inputs the required informatin (according to the conditions), the 'Create My Account' button will take them to the Dashboard.

// I need this component to store all of the user's input [into User Account File that can dynamically add (and eventually remove) users??]. This component also needs
    // to display the user's information in various places throughout the application.
// I need the text fields to ensure validation according to the input conditions I set.
// I need character limitations on the Bio text field & the 3 Areas for Improvement text field.
// I need the Signup Card to be separated and raised from the background of the page, just like the Login Card.
// I need a picture embedded into the Login Card for user-friendliness.

import { useState } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom"
import SignupButton from "./signup-button";


const SignupForm = () => {

 

    const [formData, setFormData] = useState({ name: "", email: "" });
    const [characterCount, setCharacterCount] = useState(0);
    const maxLength = 500;
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value);
        setFormData((prevData) => ({...prevData, [name]: value,}));
        setCharacterCount(e.target.value.length);
       };
    const [signupCharacterCount, setSignupCharacterCount] = useState(0);
    const maxSignupLength = 300;
    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value);
        setFormData((prevData) => ({...prevData, [name]: value,}));
        setSignupCharacterCount(e.target.value.length);
       };
    
    const {newUser} = useParams();


    return (

        <div className="signup-form">

            <p id="signup-title">Signup</p>
            <form className="signup-container-in-form">
            
                <fieldset className="fieldset">  
                    <legend className="legend">Name</legend>

                    <label> First:
                        <input className="textfield" type="text" name="first-name"  onChange={handleChange} />
                    </label> 

                    <label className="text-to-prompt-pad"> Last:
                        <input className="textfield" type="text" name="last-name"  onChange={handleChange} />
                    </label> <br /> <br />

                </fieldset> <br />
              
                <fieldset>
                    <legend className="legend">Contact</legend> 

                    <label> Email: 
                        <input className="textfield" type="email" name="email" onChange={handleChange} required/>
                    </label> 

                    <label> <em>Phone:</em> 
                        <input className="textfield" type="phone" name="phone" placeholder="optional" onChange={handleChange} required/>
                    </label> <br /> <br />

                </fieldset> <br />

                <fieldset> 
                    <legend className="legend">Account</legend> 

                        <label> Username: 
                            <input className="textfield" type="username" name="username"  onChange={handleChange} required/>
                        </label> 

                        <label> Password:
                            <input className="textfield" type="password" name="password"  onChange={handleChange} required/>
                        </label> <br /> <br />

                </fieldset> <br/>

                <a href="./#/dashboard" class="signup-button-class">Signup</a> 

            </form>

            <form>
                <p>Already have an account? Click <a id="hyperlink" href="/#/login">here</a> to login!</p>
            </form>

        </div>
    )

}

export default SignupForm;