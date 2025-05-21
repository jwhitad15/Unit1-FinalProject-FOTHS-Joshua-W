//App.js

import React from 'react';
import Button from './TestButton';
import './Test.css';

function LoginButton() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{ textAlign: "center" }} 
                    className="button-heading">GeeksForGeeks</h1>
                <h4 style={{ textAlign: "center" }}> 
                    Awesome Button Hover Effects
                </h4>
            </header>

            
            <Button text="Hover Effect 1" effectType="effect1" />
            <Button text="Hover Effect 2" effectType="effect2" />
            <Button text="Hover Effect 3" effectType="effect3" />
            <Button text="Hover Effect 4" effectType="effect4" />
            <Button text="Hover Effect 5" effectType="effect5" />
        </div>
    );
}

export default LoginButton;