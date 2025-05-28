

const Dashboard = () => {
    return (
        <div id="main">

           
            <div className="userHeader">
                <div className="header-logo"> justOne Logo </div>
                <div className="header-user"> Welcome, </div>
                <div className="header-center"> Navigation Menu </div>
            </div>

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