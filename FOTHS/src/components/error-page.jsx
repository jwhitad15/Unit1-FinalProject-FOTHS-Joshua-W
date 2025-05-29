const ErrorPage = () => {

    return (
        <div id="about-main">

           
            <div className="error-header">
                <div className="header-logo"> justOne Logo </div>
                <div className="header-user"> Welcome, </div>
                <div className="header-center"> Navigation Menu </div>
            </div>

            <main>
                <div className="about-title-container"> <h2> Error 404: Page Does Not Exist </h2> </div> <br />

                <div className="about-story-card"> 
                    <h2>We apologize, but there seems to be an error. Our records indicate that the page you are trying to access does not exist. Please return to the home page. </h2>
                </div>

                <div className="return-to-dashboard-button-class">
                   <a id="return-to-dashboard-hyperlink" href="./dashboard">Return</a>
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

export default ErrorPage;