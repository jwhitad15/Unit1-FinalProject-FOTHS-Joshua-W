import React from "react";

const DisplayUserInteraction = (props) => {

    return (
        <div className="mock-aside-tag">
            <div className="scope-card-2"> 
                <p>This section displays your personal goals as you enter them. Go ahead and try it!</p>
            </div>
            <div className="scope-card-prop"> 
            {props.data}  
            </div>

        </div>
    );
}



export default DisplayUserInteraction;