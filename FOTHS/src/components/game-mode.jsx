import FourElementHeader from "./header-4";


const GameMode = () => {
    return (
        <div id="main">

           
            <div className="game-mode-header">
                <FourElementHeader/>
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