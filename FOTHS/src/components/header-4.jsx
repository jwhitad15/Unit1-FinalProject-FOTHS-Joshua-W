// custom reusable header component (4 elements)

import ExitProgram from "./exit-program-button";

const FourElementHeader = () => {

    return (
        <header className="foths-header">
            <div className="header-element-1"> justOne&trade; </div>
            <div className="header-element-4"> Welcome, User! </div>
            <a href="./#/dashboard" id="card-hyperlink" className="header-element-3"> Dashboard</a>
            <ExitProgram/>
        </header>
    )
};

export default FourElementHeader;