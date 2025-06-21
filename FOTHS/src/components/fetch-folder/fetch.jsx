// This component controls the Study Mode Scripture carousel
import {useState, useEffect} from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import FourElementHeader from "../header-components/header-4";
import Footer from "../footer/footer";


const Fetchy = ({}) => {

        const [items, setItems] = useState([]);
        const [dataIsLoaded, setDataIsLoaded] = useState(false);
    
        // React hooking to fetch mock data
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((json) => {
                    setItems(json);
                    setDataIsLoaded(true);
                });
        }, []); 
    
        // Conditional Rendering
        if (!dataIsLoaded) {
            return (
                <div>
                    <h1>Please wait some time....</h1>
                </div>
            );
        }

    return (
        <div id="foths-main" className="fetchy">

           
            <div className="study-header">
                <FourElementHeader/>
            </div>

       
            {/* <div>
                <button  className="study-previous-button"> 
                    <div id="study-button-text"> Next </div>
                    <div id="study-button-icon"> <FaArrowRightLong/> </div>
                </button>
            </div>

            {/* event handling inserted on buttons */}
            {/* <div>
                <button className="study-next-button">
                    <div id="study-button-text"> Previous </div>  
                    <div id="study-button-icon"> <FaArrowLeftLong/> </div>  
                </button>
            </div> */}

            {/* <main className="study-display-verse"> */}

              <h1 className="geeks">FOTHS User Briefs</h1>
            <div className="subheader">
                <h2>Fetching User Data from API</h2>
                <h4>This page represents a mockup fetch for sample data. When more users join FOTHS, user account data will be fetched & displayed on this page. </h4>
            </div> <br />
          
            <hr/> <br />

               <div className="container">
                    {items.map((item) => (
                    <div className="item" key={item.id}>
                        <table className="center">
                            <tr>
                                <th> <strong> Username </strong> </th>
                                <th> <strong> Name </strong></th>
                                <th> <strong> Email </strong></th>
                            </tr> 
                            <tr>
                            {/* Passed down props */}
                                <td className="username-cell">{item.username}</td>
                                <td className="name-cell">{item.name}</td>
                                <td className="email-cell">{item.email}</td>
                            </tr>
                        </table> <br/>
                    </div>
                ))}
            </div> 
            {/* </main> */}

            {/* <div className="verse-name">
                <p className="verse-size"></p>
            </div> */}

            <div className="return-to-foths-from-study">
                   <a id="return-to-dashboard-hyperlink" href="./#/foths">Home</a>
            </div>

            <Footer/>

        </div>

    )
}

export default Fetchy;