import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CreateTask } from "../src/components";
import { Provider } from "react-redux";
import { makeStore } from "../src/store";

const store = makeStore({});

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

const MockCreateTask = () => {
  const handleUpdate = () => {
    console.log("error message");
  };
  return <CreateTask updateStatus={() => handleUpdate} />;
};

describe("Create Task", () => {
  render(
    <ReduxProvider reduxStore={store}>
      <MockCreateTask />
    </ReduxProvider>
  );

  it("should render button element", () => {
    const addButton = screen.getByRole("button", { name: "Add" });
    expect(addButton).toBeInTheDocument();
  });
});
