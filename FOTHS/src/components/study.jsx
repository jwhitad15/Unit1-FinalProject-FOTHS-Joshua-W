import { FcRight } from "react-icons/fc";
import { FcLeft } from "react-icons/fc";

const Study = () => {
    return (
        <div id="foths-main">

           
            <div className="study-header">
                <div className="header-element-1"> FOTHS </div>
                <div className="header-element-2"> Dashboard </div>
                <div className="header-element-3"> Exit Program </div>
                <div className="header-element-4"> Welcome, User! </div>
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