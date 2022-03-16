import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ViewTask } from "../src/components";
import { Provider } from "react-redux";
import { makeStore } from "../src/store";

const store = makeStore({});

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

const MockCard = () => {
  return <ViewTask title="Clear our input" completed={true} id="2" />;
};

it("should render taskdetails passed into task props", () => {
  render(
    <ReduxProvider reduxStore={store}>
      <MockCard />
    </ReduxProvider>
  );
  const heading = screen.getByText(/Clear our input/i);
  expect(heading).toBeInTheDocument();
});
