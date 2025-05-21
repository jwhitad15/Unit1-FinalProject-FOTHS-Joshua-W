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
import { useParams } from "react-router-dom"
import SignupButton from "./signup-button";

const SignupForm = () => {

    const [formData, setFormData] = useState({ name: "", email: "" });
    const [characterCount, setCharacterCount] = useState(0);
    const maxLength = 200;
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value);
        setFormData((prevData) => ({...prevData, [name]: value,}));
        setCharacterCount(e.target.value.length);
       };
    
    const {newUser} = useParams();


    return (

        <div class="signup-form">

            <h1>Login</h1>
            <form class="form">

                <label> Username <br /> 
                    <input class="textfield" type="text" name="name" value={formData.name} onChange={handleChange} />
                </label> <br /> <br />

                <label> Email <br />
                    <input class="textfield" type="email" name="email" value={formData.email} onChange={handleChange}/>
                </label> <br /> <br />

                <label> Church Name <br />
                    <input class="textfield" type="email" name="email" value={formData.email} onChange={handleChange}/>
                </label> <br /> <br />

                <label> Bio <br />
                    <textarea class="textfield" id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} maxLength={maxLength}></textarea> 
                        <div id="characterCount"> Character Limit: {characterCount} / {maxLength} </div>
                </label> <br /> <br />

                <label> 3 Areas for Improvement <br />
                    <textarea class="textfield" id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} maxLength={maxLength}></textarea> 
                        <div id="characterCount"> Character Limit: {characterCount} / {maxLength} </div>
                </label> <br /> <br />

                <SignupButton onClick=" document.location='signup-form.jsx' " text="Hover Effect 2" effectType="effect2"/>

            </form>

            <form>
                <p>Already have an account? Click <a>here</a> to login!</p>
            </form>

        </div>
    )

}

export default SignupForm;