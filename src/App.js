import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }
    render() {
        //const { counter } = this.state;
        return (
            <div
                data-test="app-component"
                style={{ textAlign: "center", marginTop: "50px" }}
            >
                <h1 data-test="counter-display">
                    The counter is currently at:{" "}
                    <span className="font-weight-bold text-success">
                        {this.state.counter}
                    </span>
                </h1>
                <button
                    className="btn btn-primary mt-2"
                    data-test="increment-button"
                    onClick={() =>
                        this.setState({ counter: this.state.counter + 1 })
                    }
                >
                    Increment
                </button>
            </div>
        );
    }
}

export default App;
