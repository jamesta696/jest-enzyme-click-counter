import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state at setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
};

/**
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShallowWrapper} with containing node(s) given the data-test attribute/value.
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

// ---------------------------Tests--------------------------- //

test("renders App without an error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "app-component");
    expect(appComponent.length).toBe(1);
});

test("renders the counter display", () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.length).toBe(1);
});

test("coutner starts at 0", () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state("counter");
    expect(initialCounterState).toBe(0);
});

describe("Increment block testing", () => {
    test("renders the increment button", () => {
        const wrapper = setup();
        const button = findByTestAttr(wrapper, "increment-button");
        expect(button.length).toBe(1);
    });

    test("when increment button clicked, the counter is incremented in display", () => {
        let counter = 7;
        const wrapper = setup(null, { counter });

        // find button and click
        const button = findByTestAttr(wrapper, "increment-button");
        button.simulate("click");
        wrapper.update();

        // Find display and test value
        const counterDisplay = findByTestAttr(wrapper, "counter-display");
        expect(counterDisplay.text()).toContain(counter + 1);
        // The counter is currently at: 8
        //console.log(counterDisplay.text());
    });
});

describe("Decrement block testing", () => {
    test("renders decrement button", () => {
        const wrapper = setup();
        const button = findByTestAttr(wrapper, "decrement-button");
        expect(button.length).toBe(1);
    });

    test("make sure error not shown by default", () => {
        const wrapper = setup();
        const errorElement = findByTestAttr(wrapper, "error-msg");

        const errorHiddenClass = errorElement.hasClass("hidden");
        expect(errorHiddenClass).toBe(true);
    });

    test("clicking decrement button decrements counter only when counter is greater than 0", () => {
        const counter = 5;
        const wrapper = setup(null, { counter });

        const button = findByTestAttr(wrapper, "decrement-button");
        button.simulate("click");
        wrapper.update();

        const counterDisplay = findByTestAttr(wrapper, "counter-display");
        expect(counterDisplay.text()).toContain(counter - 1);
        // The counter is currently at: 4
        //console.log(counterDisplay.text());
    });
});

describe("counter at 0 and decrement button is clicked", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();

        // find decrement button and click
        const button = findByTestAttr(wrapper, "decrement-button");
        button.simulate("click");
        wrapper.update();
    });

    test("error messgae displays", () => {
        // Check error message class, it's displayed now since there is a error
        const errorElement = findByTestAttr(wrapper, "error-msg");
        const errorHiddenClass = errorElement.hasClass("hidden");
        expect(errorHiddenClass).toBe(false); // <---hidden class is removed and error is shown
    });

    test("make sure counter still displays 0", () => {
        const counterDisplay = findByTestAttr(wrapper, "counter-display");
        expect(counterDisplay.text()).toContain(0);
    });

    test("when error is shown and increment clicked, error msg is hidden", () => {
        // Find increment button and click
        const button = findByTestAttr(wrapper, "increment-button");
        button.simulate("click");
        wrapper.update();

        const errorElement = findByTestAttr(wrapper, "error-msg");
        const errorHiddenClass = errorElement.hasClass("hidden");
        expect(errorHiddenClass).toBe(true); // <--- hidden class is added and error msg is gone
    });
});
