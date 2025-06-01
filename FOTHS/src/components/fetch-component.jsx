import React, { useState, useEffect } from "react";
import "./AppQ.css";

const AppQ = () => {
    const [items, setItems] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setDataIsLoaded(true);
            });
    }, []); 
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
            </div> <br />

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
export default AppQ;