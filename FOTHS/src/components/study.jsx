import { FcRight } from "react-icons/fc";
import { FcLeft } from "react-icons/fc";

const Study = () => {
    return (
        <div id="foths-main">

           
            <div className="fothsUserHeader">
                <div className="study-header-logo"> justOne Logo </div>
                <div className="study-header-user"> Welcome, </div>
                <div className="study-header-center"> Navigation Menu </div>
            </div>

       
            <aside className="study-previous-button">
                <h1><FcRight/></h1>
            </aside>

            <main class="study-display-verse">
                <h1>"So then faith comes by hearing and hearing by the word of God". Romans 10:17</h1> <br />
                <div className="study-title"> Study Mode </div>
                <div className="verse-name"> Verse Name </div>
            </main>

            <nav className="study-next-button">
                <h1><FcLeft/></h1>
            </nav>

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
            </footer>

        </div>

    )
}

export default Study;