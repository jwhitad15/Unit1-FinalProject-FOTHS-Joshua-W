

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
                <div className="FOTHS-dashboard-card"> 
                    <hr/> FOTHS <hr/> <br/>
                    <p className="dashboard-card-text"> Click on this game card to play! </p> 
              
                </div>
            </main>

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
                {/* <p to="/about" className="footer-copyright"> About </p> */}
            </footer>

        </div>

    )
}

export default Dashboard;