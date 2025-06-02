// grandchild component that displays the dynamic user data on FOTHS main page
import React from "react";

const DisplayUserInteraction = (props) => {

    return (
        <div >
  
            <div className="scope-card-j"> 
            {props.data} <br></br> 
            <p> LEVEL: {props.radioData} </p>
            </div>

        </div>
    );
}



export default DisplayUserInteraction;