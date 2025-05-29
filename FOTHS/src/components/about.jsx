

const About = () => {
    return (
        <div id="about-main">

           
            <div className="about-header">
                <div className="header-logo"> justOne Logo </div>
                <div className="header-user"> Welcome, </div>
                <div className="header-center"> Navigation Menu </div>
            </div>

            <main>
                <div className="about-title-container"><p>FOTHS Generation 1 Prototype A</p></div> <br />

                <div className="about-story-card"> Fruits of the Holy Spirit, otherwise 
                    known as FOTHS, is a study tool designed to facilitate Scripture memorization in saints of all ages, ethnicities, and gender.
                    Inspired by 2 Timothy 2:15, FOTHS , emphasizes the importance of learning & integrating the Fruits of the Holy Spirit into one's life. 
                    FOTHS comes equipped with three unique game modes: Study (for storing the Word in the hearts of all saints), Recall (a virtual fill-in-the-blank mode that resembles flashcards),
                    and Quiz (which gives the user a choice between True/False questions and Multiple Choice).
                    flashcards, options for quiz games, options for user account & 
                    interactivity with photos & more.
                </div>

                <div className="about-app-card">
                    <p>Fruits of the Holy Spirit</p>
                    <p>FOTHS &#8482;</p>
                    <h4>SPECS</h4>
                    <ul>
                        <li>Serial Number: JWMP-j1-FOTHS-G01PTA</li>
                        <li>Lifecycle: Generation 1 Prototype A</li>
                    </ul>
                    <p>Fruits of the Holy Spirit</p>
                    <p>&copy; 2025</p>
                    <p>a justOne talent</p>
                    <p>in association with JWMP</p>
                </div>
                
            </main>

            <form action="./dashboard">
            <input type="submit" value="Go to Another Page" />
            </form>

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
            </footer>

        </div>

    )
}

export default About;