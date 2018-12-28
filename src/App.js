import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div data-test="app-component">
                <h1 data-test="counter-display">The counter is currently</h1>
                <button
                    className="btn btn-primary"
                    data-test="increment-button"
                >
                    Increment
                </button>
            </div>
        );
    }
}

export default App;
