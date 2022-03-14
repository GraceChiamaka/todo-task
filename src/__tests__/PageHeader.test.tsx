import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../components";

describe("Header Component", () => {
  it("should render page header component with text passed into title prop", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { name: /TSKS/i });
    expect(heading).toBeInTheDocument();
  });
});
