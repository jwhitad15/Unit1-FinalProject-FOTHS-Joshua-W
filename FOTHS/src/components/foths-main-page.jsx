import { useState } from "react";
import UserInteraction from "./foths-user-interaction";
import FourElementHeader from "./header-4";
import Footer from "./footer";
import DisplayUserInteraction from "./foths-display-user-interaction";


const FOTHSMain = () => {

    return (
        <div id="foths-main">

           
            <FourElementHeader/>

       
            <aside>
                <div className="scope">Scope</div>
                <div className="scope-card-1"><UserInteraction/> </div>
            </aside>

            <div className="foths-main">
                <div className="foths-main-title"> Fruits of the Holy Spirit </div>

                <div className="fruits-grid">
                    <div className="fruit-cards-row-1">
                        <a href="./#/game-mode" id="card-hyperlink" className="fruit-card-1"> Fruit 1</a>
                        <a href="./#/under-construction" id="card-hyperlink" className="fruit-card-2">Fruit 2</a>
                        <a href="./#/under-construction" id="card-hyperlink" className="fruit-card-3">Fruit 3</a>
                    </div>
                    <div className="fruit-cards-row-2">
                        <a href="./#/under-construction" id="card-hyperlink" className="fruit-card-4">Fruit 4</a>
                        <a href="./#/under-construction" id="card-hyperlink" className="fruit-card-5">Fruit 5</a>
                        <a href="./#/under-construction" id="card-hyperlink" className="fruit-card-6">Fruit 6</a>
                    </div>
                    <div className="fruit-cards-row-3">
                        <a href="./#/under-construction" id="card-hyperlink" className="fruit-card-7">Fruit 7</a>
                        <a href="./#/under-construction" id="card-hyperlink" className="fruit-card-8">Fruit 8</a>
                        <a href="./#/under-construction" id="card-hyperlink" className="fruit-card-9">Fruit 9</a>
                    </div>
                </div>

            </div>

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