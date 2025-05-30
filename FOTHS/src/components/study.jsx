import { FcRight } from "react-icons/fc";
import { FcLeft } from "react-icons/fc";

const Study = () => {
    return (
        <div id="foths-main">

           
            <div className="study-header">

            <div className="header-element-1"> justOne&trade; </div>
                <div className="header-element-4"> Welcome, User! </div>
                <a href="./#/dashboard" id="card-hyperlink" className="header-element-3"> Dashboard</a>
                <a href="./#/login" id="card-hyperlink" className="header-element-4"> Exit Program </a>
            </div>

       
            <aside className="study-previous-button">
                <h1><FcRight/></h1>
            </aside>


            <nav className="study-next-button">
                <h1><FcLeft/></h1>
            </nav>

            <main class="study-display-verse">
                <h1>"So then faith comes by hearing and hearing by the word of God". Romans 10:17</h1> <br />
                <div className="study-title"> Study Mode </div>
                <div className="verse-name"> Verse Name </div>
            </main>

            <div className="return-to-foths-from-study">
                   <a id="return-to-dashboard-hyperlink" href="./#/foths">Home</a>
            </div>

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
            </footer>

        </div>

    )
}

export default Study;