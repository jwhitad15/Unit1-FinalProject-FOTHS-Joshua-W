

const GameMode = () => {
    return (
        <div id="main">

           
            <div className="userHeader">
                <div className="header-logo"> justOne Logo </div>
                <div className="header-user"> Welcome, </div>
                <div className="header-center"> Navigation Menu </div>
            </div>

            <main className="game-mode-cards">
                <div className="game-mode-title"> Game Mode </div>
                <div className="game-card-1"> Study </div>
                <div className="game-card-2"> Recall </div>
                <div className="game-card-3"> Quiz </div>
             
            </main>

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
            </footer>

        </div>

    )
}

export default GameMode;