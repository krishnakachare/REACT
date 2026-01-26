import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantCard from "../src/components/RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMocks.json";

describe("Restaurant Card Component Test Cases", () => {
  test("Should render Restaurant Card Component with props Data", () => {
    //? Since this component takes some data in props, we need to use mock data to test it.
    render(<RestaurantCard resData={MOCK_DATA} />);

    //? Querying
    const name = screen.getByText("MOJO Pizza - 2X Toppings");

    //? Assertion
    expect(name).toBeInTheDocument();
  });
});
