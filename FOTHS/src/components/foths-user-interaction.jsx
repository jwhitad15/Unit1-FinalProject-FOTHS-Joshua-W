import React, { useState } from "react";
import DisplayUserInteraction from "./foths-display-user-interaction"


const UserInteraction = (prop) => {

    const [goalInput, setGoalInput] = useState('');
    const [goalSubmit, setGoalSubmit] = useState('');

    const handleChange = e => {
      setGoalInput(e.target.value)
    };
    const handleSubmit = e => {
      e.preventDefault();
      setGoalSubmit(goalInput)
      setGoalInput('')
    };

    return (

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Personal Goals</h1>
    
          <form className="scope-goals-input" onSubmit={handleSubmit}>
            <label> <br /> 
              <input className="scope-textfield" type="text" placeholder="Enter Goals Here" value={goalInput} onChange={handleChange} />
            </label> <br /> <br />

            <button type="submit" >Submit</button>
          </form>

        {goalSubmit && <DisplayUserInteraction data={goalSubmit} />}
      
      </div>
    );
      }
      
export default UserInteraction;