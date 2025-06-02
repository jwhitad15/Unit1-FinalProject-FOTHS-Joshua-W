// custom reusable header component (3 elements)

import ExitProgram from "./exit-program-button";

const ThreeElementHeader = () => {

    return (
        <header className="dashboard-header">
            <div className="header-element-1"> justOne&trade; </div>
            <div className="header-element-4"> Welcome, User! </div>
            <ExitProgram/>
        </header>
    )
};

export default ThreeElementHeader;