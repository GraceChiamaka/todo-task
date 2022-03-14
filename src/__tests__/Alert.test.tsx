import { render } from "@testing-library/react";
import { Alert } from "../components/General";

test("renders alert component", () => {
  render(
    <Alert
      type="success"
      msg="Successful!"
      close={() => console.log("closed")}
    />
  );
});
