// grandchild component that displays the dynamic user data on FOTHS main page
import React from "react";

const DisplayUserInteraction = (props) => {

    return (
        <div >
  
            <ul className="scope-card-j"> 
            <li className="scope-card-list-item"> {props.data}</li>  <br></br> 
            <p> LEVEL: {props.radioData} </p>
            </ul>

        </div>
    );
}



export default DisplayUserInteraction;