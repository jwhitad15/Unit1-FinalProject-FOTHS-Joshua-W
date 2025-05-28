

const FOTHSMain = () => {
    return (
        <div id="foths-main">

           
            <div className="fothsUserHeader">
                <div className="header-logo"> FOTHS Logo </div>
                <div className="header-user"> Welcome, </div>
                <div className="header-center"> Navigation Menu </div>
            </div>

       
            <aside>
                <div className="scope">Scope</div>
                <div className="scope-card-1">Reminders</div>
                <div className="scope-card-2">Goals</div>
            </aside>

            <main className="foths-main">
                <div className="foths-main-title"> FOTHS </div>
                <div className="fruit-image-1"> &#127822; </div>

                <div className="fruit-cards-row-1">
                    <a href="./game-mode" id="card-hyperlink" className="fruit-card-1">Fruit 1</a>
                    <a disabled href="./game-mode" id="card-hyperlink" className="fruit-card-2">Fruit 2</a>
                    <a href="./game-mode" id="card-hyperlink" className="fruit-card-3">Fruit 3</a>
                </div>
                <div disabled className="fruit-cards-row-2">
                    <a href="./game-mode" id="card-hyperlink" className="fruit-card-4">Fruit 4</a>
                    <a href="./game-mode" id="card-hyperlink" className="fruit-card-5">Fruit 5</a>
                    <a href="./game-mode" id="card-hyperlink" className="fruit-card-6">Fruit 6</a>
                </div>
                <div className="fruit-cards-row-3">
                    <a href="./game-mode" id="card-hyperlink" className="fruit-card-7">Fruit 7</a>
                    <a href="./game-mode" id="card-hyperlink" className="fruit-card-8">Fruit 8</a>
                    <a href="./game-mode" id="card-hyperlink" className="fruit-card-9">Fruit 9</a>
                </div>

            </main>

            <nav>
                <div className="recent-activity">Activity</div>
                <div className="recent-activity-card-1">Activity</div>
                <div className="recent-activity-card-2">Activity</div>
                <div className="recent-activity-card-3">Activity</div>
            </nav>

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
            </footer>

        </div>

    )
}

export default FOTHSMain;