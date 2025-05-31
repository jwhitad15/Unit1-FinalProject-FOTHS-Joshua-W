import FourElementHeader from "./header-4";
import Footer from "./footer";

const UnderConstruction = () => {

    return (
        <div id="under-construction-main">

           
            <div className="under-construction-header">
                <FourElementHeader/>
            </div>

            <div className="under-construction-container">
                <div className="under-construction-title-container"> <h2> Under Construction! </h2> </div> <br />

                <div className="under-construction-display-card"> 
                    <h1>Look out! </h1> <hr/>
                    <h2>This page is currently under construction - thank you for your patience as we continue updating our application.</h2> 
                    <h2>In the meantime, use the return button below to navigate back to the FOTHS home page and pick a different game!</h2> <hr/>
                </div>

                <div className="return-to-foths-button-class">
                   <a id="return-to-dashboard-hyperlink" href="./#/foths">Return</a>
                </div>
                
            </div>


            <Footer/>

        </div>

    )
}

export default UnderConstruction;