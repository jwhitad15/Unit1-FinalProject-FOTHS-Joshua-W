// Component that receives user input

import React, { useState } from "react";
import DisplaySelectedDropdown from "./foths-display-user-selected-dropdown"
import DisplayCustomGoal from "./foths-display-user-custom-goal";


const UserInteraction = () => {
  // Custom Description
  const [goalInput, setGoalInput] = useState('');
  const [goalSubmit, setGoalSubmit] = useState('');
  // Dropdown
  const [goal, setGoal] = useState('')
  const [selectedGoal, setSelectedGoal] = useState('')
  // Custom Title
  const [title, setTitle] = useState('');
  const [titleSubmit, setTitleSubmit] = useState('');

  const [isValid, setIsValid] = useState(false);
  const [isCustomValid, setIsCustomValid] = useState(false);

  // functions that handle events and allow program to execute logic
  const handleChange = e => {
    setGoalInput(e.target.value)
  };

  const handleDropdown = e => {
    setGoal(e.target.value);
  }

  const handleTitle = e => {
    setTitle(e.target.value);
  }


  const handleSubmit = e => {
    e.preventDefault(); 

    if (goal !== 0 && goal != '') {
      setIsValid(true);
    } else if (title !== ('') && goalInput !== ('')) {
      setIsCustomValid(true)
    }
    console.log(isValid)
    console.log(isCustomValid)
    setGoalSubmit(goalInput);
    setGoalInput('');

    setSelectedGoal(goal);
    setGoal('');

    setTitleSubmit(title);
    setTitle('');

  };




  return (

    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* <h1 className="personal-goals">Personal Goals</h1> */}

      <form className="scope-goals-input" onSubmit={handleSubmit}>

        <label for="goals">Choose a Goal:</label> <br/>

        <select name="goals" className="goal-select" onChange={handleDropdown}>
          <option value="0"></option>
          <option value="1">Study Faith for 31 minutes</option>
          <option value="2">Study Gentleness for 31 minutes</option>
          <option value="3">Study Love for 31 minutes</option>
        </select> <br /> <br />

         <hr/>
        <label> <br />
          {/* Validation - makes sure user at least inputs 4 characters in textbox */}
          Custom Goal
          <input maxLength='15' minLength='4' className="scope-textfield" type="text" placeholder="Goal Title" value={title} onChange={handleTitle} /> <br />
          <textarea maxLength='50' minLength='4' className="scope-textfield" type="text" placeholder="Description" value={goalInput} onChange={handleChange} />
        </label> <br /> <br />

        <button type="submit" className="scope-button-class" >Submit</button>
      </form>

      <div> { isValid && <DisplaySelectedDropdown goalData={selectedGoal} />} </div>
      <div> { isCustomValid && <DisplayCustomGoal data={goalSubmit} customTitle={titleSubmit} />} </div>


    </div>
  );
}

export default UserInteraction;

// goalSubmit && selectedGoal && titleSubmit