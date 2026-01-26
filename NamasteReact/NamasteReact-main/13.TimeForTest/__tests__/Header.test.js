import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../src/components/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header Component Test Cases", () => {
  test("Should render component with a login button", () => {
    render(
      // Using BrowserRouter to use Link component.
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //? Different ways to find login button
    const loginBtn = screen.getByRole("button");
    // const loginBtn = screen.getByText("Login")
    // const loginBtn = screen.getByRole("button", {name: "Login"});

    expect(loginBtn).toBeInTheDocument();
  });

  test("Should render component with a cart item 0 button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItem = screen.getByText("Cart - (0 items)");
    //? It cart exists at all
    // const cartItem = screen.getByText(/Cart/)

    expect(cartItem).toBeInTheDocument();
  });

  test("Should change Login button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button", { name: "Logout" });

    expect(logoutBtn).toBeInTheDocument();
  });
});
