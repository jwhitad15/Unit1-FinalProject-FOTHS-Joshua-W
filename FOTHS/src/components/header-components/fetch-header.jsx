// custom reusable header component (4 elements)

import ExitProgram from "./exit-program-button";

const FetchtHeader = () => {

    return (
        <header className="foths-header">
               <a href="./#/dashboard" id="card-hyperlink" className="header-element-3"> Dashboard</a>
            <div className="header-fetch-title"> FOTHS User Accounts </div>
            {/* <div className="header-element-4"> Welcome, User! </div> */}
     
            <ExitProgram/>
        </header>
    )
};

export default FetchtHeader;