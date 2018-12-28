import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div
                data-test="app-component"
                style={{ textAlign: "center", marginTop: "50px" }}
            >
                <h1 data-test="counter-display">The counter is currently</h1>
                <button
                    className="btn btn-primary mt-2"
                    data-test="increment-button"
                >
                    Increment
                </button>
            </div>
        );
    }
}

export default App;
