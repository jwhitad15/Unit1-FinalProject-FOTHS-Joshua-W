

const Dashboard = () => {
    return (
        <div id="main">

           
            <header className="dashboard-header">
                <div className="header-element-1"> FOTHS </div>
                <div className="header-element-2"> Dashboard </div>
                <div className="header-element-3"> Exit Program </div>
                <div className="header-element-4"> Welcome, User! </div>
            </header>

            <main>
                
                <div className="dashboard-title"> Dashboard View </div>
                <a href="./foths" id="card-hyperlink" className="FOTHS-dashboard-card">FOTHS</a>

            </main>

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
                {/* <p to="/about" className="footer-copyright"> About </p> */}
            </footer>

        </div>

    )
}

export default Dashboard;