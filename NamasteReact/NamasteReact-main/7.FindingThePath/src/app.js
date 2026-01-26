import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "../src/components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //* Ensure to install version 6.22.0 or less else will throw error.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* Now we are rendering body as child */}
      {/* <Body /> */}
      {/* To render different component according to different routes */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", // :resId makes it a dynamic route
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter}></RouterProvider>);
