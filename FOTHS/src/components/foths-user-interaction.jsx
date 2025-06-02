// Component that receives user input

import React, { useState } from "react";
import DisplayUserInteraction from "./foths-display-user-interaction"


const UserInteraction = () => {

  const [goalInput, setGoalInput] = useState('');
  const [goalSubmit, setGoalSubmit] = useState('');
  const [radio, setRadio] = useState('Beginner')

  // functions that handle events and allow program to execute logic
  const handleChange = e => {
    setGoalInput(e.target.value)
  };
  const handleRadio = (value) => {
    setRadio(value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    setGoalSubmit(goalInput)
    setGoalInput('')
  };

  return (

    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Personal Goals</h1>

      <div> <label for='beginner'> Beginner </label> <input type="radio" id="beginner" value="beginner" checked={radio === "Beginner"} onChange={() => handleRadio("Beginner")} /> </div>
      <div> <label for='advanced'> Advanced </label> <input type="radio" id="advanced" value="advanced" checked={radio === "Advanced"} onChange={() => handleRadio("Advanced")} /> </div>

      <form className="scope-goals-input" onSubmit={handleSubmit}>
        <label> <br />
          {/* Validation - makes sure user at least inputs 4 characters in textbox */}
          <input maxLength='250' minLength='4' className="scope-textfield" type="text" placeholder="Enter Goals Here" value={goalInput} onChange={handleChange} />
        </label> <br /> <br />

        <button type="submit" >Submit</button>
      </form>

      <div>{goalSubmit && radio && <DisplayUserInteraction data={goalSubmit} radioData={radio} />} </div>


    </div>
  );
}

export default UserInteraction;