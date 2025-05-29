const UnderConstruction = () => {

    return (
        <div id="under-construction-main">

           
            <div className="under-construction-header">
                <div className="header-element-1"> FOTHS </div>
                <div className="header-element-2"> Dashboard </div>
                <div className="header-element-3"> Exit Program </div>
                <div className="header-element-4"> Welcome, User! </div>
            </div>

            <div className="under-construction-container">
                <div className="under-construction-title-container"> <h2> Under Construction! </h2> </div> <br />

                <div className="under-construction-display-card"> 
                    <h1>Look out! </h1> <hr/>
                    <h2>This page is currently under construction - thank you for your patience as we continue expanding.</h2> 
                    <h2>In the meantime, use the return button below to navigate back to the dashboard and pick a different game!</h2>
                </div>

                <div className="return-to-dashboard-button-class">
                   <a id="return-to-dashboard-hyperlink" href="./#/foths">Return</a>
                </div>
                
            </div>


            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
            </footer>

        </div>

    )
}

export default UnderConstruction;