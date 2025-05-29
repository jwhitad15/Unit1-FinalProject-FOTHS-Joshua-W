

const GameMode = () => {
    return (
        <div id="main">

           
            <div className="game-mode-header">
                <div className="header-element-1"> 1 </div>
                <div className="header-element-2"> 2 </div>
                <div className="header-element-3"> 3 </div>
                <div className="header-element-4"> 4 </div>
                {/* <img className="header-logo" src="/src/images/just-one-logo.png" alt="just one logo" width="50px" height="100px"></img> */}
                {/* <div className="header-user"> Welcome, </div> */}
                {/* <div className="header-center"> Navigation Menu </div> */}
            </div>

            <main className="game-mode-cards">
                <div className="game-mode-title"> Game Mode </div>
                <a href="./study" id="card-hyperlink" className="game-card-1"> Study </a>
                <a href="./study" id="card-hyperlink" className="game-card-2"> Recall </a>
                <a href="./study" id="card-hyperlink" className="game-card-3"> Quiz </a>
             
            </main>

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
            </footer>

        </div>

    )
}

export default GameMode;