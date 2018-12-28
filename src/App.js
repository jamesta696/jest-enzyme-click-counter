import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            errors: false
        };
    }

    onIncrement = e => {
        const { counter, errors } = this.state;

        if (errors) {
            this.setState({ errors: false });
        }
        this.setState({ counter: counter + 1 });
    };

    onDecrement = e => {
        const { counter } = this.state;

        if (counter === 0) {
            this.setState({ errors: true });
        } else {
            this.setState({ counter: counter - 1 });
        }
    };

    render() {
        const { counter, errors } = this.state;
        const errorClass = errors ? "" : "hidden";
        return (
            <div
                data-test="app-component"
                style={{ textAlign: "center", marginTop: "50px" }}
            >
                <h1 data-test="counter-display">
                    The counter is currently at:{" "}
                    <span className="font-weight-bold text-success">
                        {counter}
                    </span>
                </h1>

                <div
                    className={`alert alert-danger ${errorClass}`}
                    role="alert"
                    data-test="error-msg"
                >
                    <span style={{ fontSize: "25px" }}>⚠</span> Error: The
                    counter cannot go below 0{" "}
                    <span style={{ fontSize: "25px" }}>⚠</span>
                </div>

                <button
                    className="btn btn-primary mt-2"
                    data-test="increment-button"
                    onClick={this.onIncrement}
                >
                    Increment
                </button>

                <button
                    className="btn btn-secondary mt-2 ml-2"
                    data-test="decrement-button"
                    onClick={this.onDecrement}
                >
                    Decrement
                </button>
            </div>
        );
    }
}

export default App;
