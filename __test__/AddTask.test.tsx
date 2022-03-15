import { render, screen } from "@testing-library/react";
import { CreateTask } from "@src/components";
import { Provider } from "react-redux";
import { useStore } from "react-redux";

const MockCreateTask = () => {
  const store = useStore();
  const handleUpdate = () => {
    console.log("error message");
  };
  return (
    <Provider store={store}>
      <CreateTask updateStatus={() => handleUpdate} />
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
