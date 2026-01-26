import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "../src/components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
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
  const [userName, setUserName] = useState();

  //? Setting dynamic value in React Context
  //Authentication code
  useEffect(() => {
    //Make API call and send username and password
    const data = {
      name: "Swati",
    };
    setUserName(data.name);
  }, []);

  return (
    //? Using Context Provider wrapping complete app so that dynamic loggedIn User is set all across. If we want to use just for Header we can just wrap that and not whole app. Incase of Nested wrapper, it will be updated to the nearest Context Provider.
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* Swati */}
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: "Tanu" }}> */}
        {/* Tanu  */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
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
