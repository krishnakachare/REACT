import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "../src/components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Normal import
// import Grocery from "./components/Grocery";
//? Lazy Loading
// When our app will load initially it will not load the code for Grocery, Only when we visit Grocery page then only the Grocery code will come up.
// lazy() is a function given to us by React
const Grocery = lazy(() => {
  // The import used here is a function that takes the path!
  return import("./components/Grocery");
});

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      //? Suspense is a component given by React to wrap the component in which we want to implement Lazy Loading.
      // If we dont use Suspense here then by the time Grocery fetches the data which can take more time, React will treat it as empty state and stop render.
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
