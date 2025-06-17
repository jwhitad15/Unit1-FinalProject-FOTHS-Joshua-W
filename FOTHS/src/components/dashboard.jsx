import ThreeElementHeader from "./header-components/header-3";
import Footer from "./footer/footer";

const Dashboard = () => {

    return (
        <div id="main">
           
            <header className="dashboard-header">
                <ThreeElementHeader/>
            </header>

            <main>
                <div className="dashboard-title"> Dashboard View </div>
                <a href="./#/foths" id="card-hyperlink" className="FOTHS-dashboard-card"></a>
            </main>

           <Footer/>

        </div>

    )
}

export default Dashboard;