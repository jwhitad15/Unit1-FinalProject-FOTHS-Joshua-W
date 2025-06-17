import UserInteraction from "./foths-user-interaction";
import FourElementHeader from "../header-components/header-4";
import Footer from "../footer/footer";

import Image from "../image";
import Image2 from "../image2";
import Image3 from "../image3";
import Image4 from "../image4";
import Image5 from "../image5";
import Image6 from "../image6";
import Image7 from "../image7";
import Image8 from "../image8";
import Image9 from "../image9";




const FOTHSMain = () => {

    return (
        <div id="foths-main">

           
            <FourElementHeader/>

            {/* Dynamic Component that receives user input to display in another element */}
            <aside>
                <div className="scope">Scope</div>
                <div className="scope-card-1"><UserInteraction/> </div>
            </aside>

            <div className="foths-main">
                <div className="foths-main-title"> Fruits of the Holy Spirit </div>

                <div className="fruits-grid">
                    <div className="fruit-cards-row-1">
                        <a href="./#/game-mode" id="fruit-card-1-hyperlink" className="fruit-card-1">F <Image/></a>

                        {/* <a href="./#/under-construction" id="fruit-card-2-hyperlink" className="fruit-card-2"><Image2/></a> */}
                        {/* <a href="./#/under-construction" id="fruit-card-2-hyperlink" className="fruit-card-3"><Image3/></a> */}
                    </div>
                    <div className="fruit-cards-row-2">
                        {/* <a href="./#/under-construction" id="fruit-card-2-hyperlink" className="fruit-card-4"><Image4/></a> */}
                        {/* <a href="./#/under-construction" id="fruit-card-2-hyperlink" className="fruit-card-5"><Image5/></a> */}
                        {/* <a href="./#/under-construction" id="fruit-card-2-hyperlink" className="fruit-card-6"><Image6/></a> */}
                    </div>
                    <div className="fruit-cards-row-3">
                        {/* <a href="./#/under-construction" id="fruit-card-2-hyperlink" className="fruit-card-7"><Image7/></a> */}
                        {/* <a href="./#/under-construction" id="fruit-card-2-hyperlink" className="fruit-card-8"><Image8/></a> */}
                        {/* <a href="./#/under-construction" id="fruit-card-2-hyperlink" className="fruit-card-9"><Image9/></a> */}
                    </div>
                </div>

            </div>
        
            {/* Flexbox stylization to create columns & column cards */}
            <nav>
                <div className="recent-activity">Activity</div>
                <div className="recent-activity-card-1">Welcome to FOTHS, an interactive application designed to help users study & retain biblical Scripture. </div>
                <div className="recent-activity-card-2">This is your Activity Board. Any recent activity, such as study sessions or quizzes will be recorded here.</div>
                <div className="recent-activity-card-3">Have fun studying!</div>
            </nav>

            <Footer/>

        </div>

    )
}

export default FOTHSMain;