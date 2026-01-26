import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

// To group all test cases
describe("Contact Us Component Test Cases", () => {
  beforeAll(() => {
    console.log("Before All");
  });
  beforeEach(() => {
    console.log("Before Each");
  });
  afterEach(() => {
    console.log("After Each");
  });
  afterAll(() => {
    console.log("After All");
  });
  
  test("Should load Contact Component", () => {
    //? When test UI component we need to render it to jsdom using render method
    render(<Contact />);

    //? screen is another method which gives us access to the rendered component above
    //? Querying
    const heading = screen.getByRole("heading");

    //? toBeInTheDocument method will find whether my heading is in the dom or not
    //? Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //? Another way
    // const button = screen.getByText("Submit")
    expect(button).toBeInTheDocument();
  });

  test("Should load input box with placeholder value = Name", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");
    // console.log("inputName", inputName);
    expect(inputName).toBeInTheDocument();
  });

  test("Should load all(2) input boxes on the Contact Component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox"); // This returns a React element/JSX
    // console.log(inputBoxes.length); //2
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).toBeGreaterThan(1);
  });
});
