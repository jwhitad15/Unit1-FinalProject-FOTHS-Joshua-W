// grandchild component that displays the dynamic user data on FOTHS main page
import React from "react";



const DisplaySelectedDropdown = (props) => {

    const selections = {
        0: "",
        1: {title: "Complete Faith Study Mode", a:"Set a timer for 31 minutes", b:"Choose 2-3 favorite scriptures", c: "Write each verse 5 times"},
        2: {title: "Complete Faith Recall Mode", a:"Try Recall Quiz", b:"Take notes on missed questions", c: "Retake Recall Quiz"},
        3: {title: "Complete Faith Multichoice Quiz", a:"Try Multichoice Quiz", b:"Take notes on missed questions", c: "Retake Multichhoice Quiz"}
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