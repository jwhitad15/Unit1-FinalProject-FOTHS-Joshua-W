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

            <h1>Signup</h1>
            <form className="form">
            
                <fieldset>  
                    <legend className="legend">Name</legend>

                    <label> First:
                        <input className="textfield" type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label> 

                    <label className="text-to-prompt-pad"> Last:
                        <input className="textfield" type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label> <br /> <br />

                </fieldset> <br />
              
                <fieldset>
                    <legend className="legend">Contact</legend> 

                    <label> Email: 
                        <input className="textfield" type="email" name="email" value={formData.email} onChange={handleChange}/>
                    </label> 

                    <label> <em>Phone:</em> 
                        <input className="textfield" type="email" name="email" placeholder="optional" value={formData.email} onChange={handleChange}/>
                    </label> <br /> <br />

                </fieldset> <br />

                <fieldset> 
                    <legend className="legend">Account</legend> 

                    <fieldset> 
                        <legend className="nested-legend">Credentials</legend>  

                        <label> Username: 
                            <input className="textfield" type="email" name="email" value={formData.email} onChange={handleChange}/>
                        </label> 

                        <label> Password:
                            <input className="textfield" type="email" name="email" value={formData.email} onChange={handleChange}/>
                        </label> <br /> <br />

                    </fieldset> <br />

                    <label> Church Name:
                        <input className="textfield" type="email" name="email" value={formData.email} onChange={handleChange}/>
                    </label> <br /> <br />
            <hr />

                    <label> Tell us about yourself! <br />
                        <textarea className="textfield" id="feedback" name="feedback" value={formData.feedback} onChange={handleSignupChange} maxLength={maxSignupLength}></textarea> 
                            <div id="characterCount"> Character Limit: {signupCharacterCount} / {maxSignupLength} </div>
                    </label> <br /> 

                    <label> 3 Areas for Improvement <br />
                        <textarea className="textfield" id="feedback" name="feedback" value={formData.feedback} onChange={handleSignupChange} maxLength={maxLength}></textarea> 
                            <div id="characterCount"> Character Limit: {signupCharacterCount} / {maxLength} </div>
                    </label> <br /> <br />

                </fieldset>

                <SignupButton onClick=" document.location='signup-form.jsx' " text="Hover Effect 2" effectType="effect2"/>

            </form>

            <form>
                <p>Already have an account? Click <a>here</a> to login!</p>
            </form>

        </div>
    )

}

export default SignupForm;