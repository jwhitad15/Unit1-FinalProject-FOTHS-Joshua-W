

const Dashboard = () => {
    return (
        <div id="main">

           
            <header className="dashboard-header">
                <div className="header-element-1"> justOne&trade; </div>
                <div className="header-element-4"> Welcome, User! </div>
                <a href="./#/login" id="card-hyperlink" className="header-element-3"> Exit Program </a>
              

                 {/* //THIS WILL BE INCLUDED LATER AS A LINK TO BRAND//  */}
                 {/* //* <a href="./#/foths" id="card-hyperlink" className="header-element-1"> justOne&trade; </a>  */}

                 {/* //THIS WILL BE INCLUDED LATER AS A LINK TO USER ACCOUNT//  */}
                 {/* //* <a href="./#/foths" id="card-hyperlink" className="header-element-4"> Welcome, User! </a>  */}
               
               
            </header>

            <main>
                
                <div className="dashboard-title"> Dashboard View </div>
                <a href="./#/foths" id="card-hyperlink" className="FOTHS-dashboard-card">FOTHS</a>

            </main>

            <footer className="footer">
                <div className="footer-copyright"> &copy; JWMP 2025 </div>
            </footer>

        </div>

    )
}

export default Dashboard;