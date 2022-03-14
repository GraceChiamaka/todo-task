import { render, screen } from "@testing-library/react";
import { CreateTask } from "../components";
import { Provider } from "react-redux";
import store from "../store";

const MockCreateTask = () => {
  return (
    <Provider store={store}>
      <CreateTask />
    </Provider>
  );
};
describe("Create Task", () => {
  beforeEach(() => render(<MockCreateTask />));
  it("should render button element", () => {
    const addButton = screen.getByRole("button", { name: "Add" });
    expect(addButton).toBeInTheDocument();
  });

  it("should render input component", () => {
    const input = screen.queryByPlaceholderText(/Enter task title/i);
    expect(input).toBeInTheDocument();
  });
});
