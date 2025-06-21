// grandchild component that displays the dynamic user data on FOTHS main page
import React from "react";



const DisplaySelectedDropdown = (props) => {

    const selections = {
        0: "",
        1: {title: "Study Faith for 31 minutes", a:"Set a timer for 31 minutes", b:"Navigate to Study Mode for Faith", c: "Read each of the verses"},
        2: {title: "Study Gentleness for 31 minutes", a:"Set a timer for 32 minutes", b:"Navigate to Quiz Mode for Faith", c: "Read each of the chapters"},
        3: {title: "Study Love for 31 minutes", a:"Set a timer for 32 minutes", b:"Navigate to Quiz Mode for Faith", c: "Read each of the chapters"}
    }
    let notZero = false;

    if (props.goalData !== 0) {
        notZero = true;
    } 

    //console.log(notZero)

    return (
        <div className="scope-card-list-item">
  
            <ul > 

                <h5>{selections[props.goalData].title}</h5>
                <li> {selections[props.goalData].a} </li>
                <li> {selections[props.goalData].b} </li>
                <li> {selections[props.goalData].c} </li>
    

            </ul>

        </div>
    );


}



export default DisplaySelectedDropdown;