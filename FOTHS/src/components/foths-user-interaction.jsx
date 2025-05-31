import React, { useState } from "react";

const UserInteraction = (onSubmit) => {

    const [goalInput, setGoalInput] = useState('');
    const [goalSubmit, setGoalSubmit] = useState(null);
      
        //   const [characterCount, setCharacterCount] = useState(0);
        //   const maxLength = 200;
      
    const handleSubmit = (e) => {
        e.preventDefault();
        // onSubmit({formData});
        setGoalSubmit(goalInput)
    //   setFormData with '' passed through just clears the form after submission //
        setGoalInput('');
    };
      
          return (

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h1>User Form</h1>
          
                <form onSubmit={handleSubmit}>
                  <label>
                    <br /> <input className="textfield" type="text" placeholder="Enter Goals Here" value={goalInput} 
                    onChange={(e) => setGoalInput(e.target.value)} />
                  </label> <br /> <br />
      
                  <button type="submit" >Submit</button>
                </form>
           
            </div>
          );
      }
      
export default UserInteraction;