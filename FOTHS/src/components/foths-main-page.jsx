import { useState } from "react";
import UserInteraction from "./foths-user-interaction";
import DisplayUserInteraction from "./foths-display-user-interaction";
import FourElementHeader from "./header-4";


const FOTHSMain = () => {

    const [goals, setGoals] = useState(null);

    const handleGoalSubmission = (data) => {
        setGoals(data)
    };

    return (
        <div id="foths-main">

           
            <FourElementHeader/>

       
            <aside>
                <div className="scope">Scope</div>
                <div className="scope-card-1"><UserInteraction onSubmit={handleGoalSubmission}/> {goals && <DisplayUserInteraction data={goals}/>} </div>
                <div className="scope-card-2"><DisplayUserInteraction/></div>
            </aside>

            <div className="foths-main">
                <div className="foths-main-title"> FOTHS </div>
                {/* <div className="fruit-image-1"> &#127822; </div> */}

                <div className="fruits-grid">
                    <div className="fruit-cards-row-1">
                        <a href="./#/game-mode" id="card-hyperlink" className="fruit-card-1">Fruit 1</a>
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
                <div className="recent-activity-card-1">Welcome to FOTHS. This is your Activity Board</div>
                <div className="recent-activity-card-2">Any recent activity, such as study sessions or quizzes will be recorded here.</div>
                <div className="recent-activity-card-3">Have fun studying!</div>
            </nav>

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
            </footer>

        </div>

    )
}

export default FOTHSMain;