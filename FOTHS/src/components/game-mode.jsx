

const GameMode = () => {
    return (
        <div id="main">

           
            <div className="game-mode-header">


                <div className="header-element-1"> justOne&trade; </div>
                <div className="header-element-4"> Welcome, User! </div>
                <a href="./#/dashboard" id="card-hyperlink" className="header-element-3"> Dashboard</a>
                <a href="./#/login" id="card-hyperlink" className="header-element-4"> Exit Program </a>

                
                {/* <img className="header-logo" src="/src/images/just-one-logo.png" alt="just one logo" width="50px" height="100px"></img> */}
                {/* <div className="header-user"> Welcome, </div> */}
                {/* <div className="header-center"> Navigation Menu </div> */}
            </div>

            <main className="game-mode-cards">
                <div className="game-mode-title"> Game Mode </div>
                <a href="./#/study" id="card-hyperlink" className="game-card-1"> Study </a>
                <a href="./#/under-construction" id="card-hyperlink" className="game-card-2"> Recall </a>
                <a href="./#/under-construction" id="card-hyperlink" className="game-card-3"> Quiz </a>
             
            </main>

            <div className="return-to-foths-from-game-mode">
                   <a id="return-to-dashboard-hyperlink" href="./#/foths">Return</a>
            </div>
       

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
            </footer>

        </div>

    )
}

export default GameMode;