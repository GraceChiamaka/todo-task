import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../components/General";

describe("Input Component", () => {
  it("renders input component", () => {
    render(<Input />);
    expect(screen.getByTestId("custom-input"));
  });

  describe("input on change", () => {
    it("onChange", () => {
      render(
        <Input value="test value" onChange={(ev) => console.log(ev.target)} />
      );
      const queryInput = screen.getByTestId("custom-input");
      fireEvent.change(queryInput, { target: { value: "test value" } });
      expect(queryInput.value).toBe("test value");
    });
  });
});
