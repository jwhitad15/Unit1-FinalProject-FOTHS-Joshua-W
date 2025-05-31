import Header from "./header-dashboard";

const TestDashboard = () => {

    return (
        <div id="main">
           
            <header className="dashboard-header">
                <Header/>
                {/* <div className="header-element-1"> justOne&trade; </div>
                <div className="header-element-4"> Welcome, User! </div>
                <a href="./#/login" id="card-hyperlink" className="header-element-3"> Exit Program </a> */}
            </header>

            <main>
                <div className="dashboard-title"> Dashboard View </div>
                <a href="./#/foths" id="card-hyperlink" className="FOTHS-dashboard-card">FOTHS</a>
            </main>

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
                <a id="card-hyperlink" className="footer-about-link" href="./#/about"> About</a>
            </footer>

        </div>

    )
}

export default TestDashboard;