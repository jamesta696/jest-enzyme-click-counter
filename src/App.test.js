import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without an error", () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find("[data-test='app-component']");
    expect(appComponent.length).toBe(1);
});

test("renders the increment button", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find("[data-test='increment-button']");
    expect(button.length).toBe(1);
});

test("renders the counter display", () => {
    const wrapper = shallow(<App />);
    const counterDisplay = wrapper.find("[data-test='counter-display']");
    expect(counterDisplay.length).toBe(1);
});

test("coutner starts at 0", () => {});

test("when button clicked, the counter is incremented in display", () => {});
