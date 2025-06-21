// grandchild component that displays the dynamic user data on FOTHS main page
import React from "react";


const DisplayCustomGoal = (props) => {



    return (
        <div >

                <p className="scope-card-list-item"> {props.customTitle} </p> 
                <p className="scope-card-list-item"> {props.data} </p>  <br></br> 
    
        </div>
    );


}



export default DisplayCustomGoal;