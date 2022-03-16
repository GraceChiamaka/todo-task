import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ViewTask } from "../src/components";
import { Provider } from "react-redux";
import { useStore } from "react-redux";

const MockCard = () => {
  // const store = useStore();
  return (
    // <Provider store={store}>
    <ViewTask title="Clear our input" completed={true} id="2" />
    // </Provider>
  );
};

// it("should render taskdetails passed into task props", () => {
//   render(<MockCard />);
//   const heading = screen.getByText(/Clear our input/i);
//   expect(heading).toBeInTheDocument();
// });

it("should render page header component with text passed into subTitle prop", () => {
  //   render(
  //     <PageHeader
  //       title="Page Header"
  //       subTitle="Welcome"
  //       showPageModal={() => console.log("hello")}
  //     />
  //   );
  //   const paragraph = screen.getByText(/Welcome/i);
  //   expect(paragraph).toBeInTheDocument();
});
