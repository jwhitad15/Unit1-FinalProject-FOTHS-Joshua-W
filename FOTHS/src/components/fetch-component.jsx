// This component controls the mock data feature on my User Account page.

import React, { useState, useEffect } from "react";
import "./fetch.css";


const Fetch = () => {
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
        <div className="App">
            <h1 className="geeks">FOTHS User Briefs</h1>
            <div className="subheader">
                <h2>Fetching Mock Data from an API</h2>
                <h4>This page represents a mockup fetch for sample data. When more users join FOTHS, user account data will be fetched & displayed on this page. </h4>
            </div> <br /> <hr/> <br />

            {/* Render fetched data in a table */}
            <div className="container">
                {items.map((item) => (
                    <div className="item" key={item.id}>
                    <table className="center">
                        <tr>
                            <th> <strong> User_Name </strong> </th>
                            <td>Full_Name</td>
                            <td>User_Email </td>
                        </tr> 
                        <tr>
                        {/* Passed down props */}
                            <td>{item.username}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>

                    </table> <br/>
                    </div>
                ))}
            </div>
        </div>

    );
};
export default Fetch;