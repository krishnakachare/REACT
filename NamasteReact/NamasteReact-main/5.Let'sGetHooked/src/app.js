import React from "react"; // Default import
import ReactDOM from "react-dom/client";
//? Importing named export
import { Header } from "../src/components/Header";
//? Importing default export
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

//! Two ways of exporting file:
//? 1. Default export - export default file name --> import filename
//? 2. Named export - export Component --> import {Component}: It is used when we need to export multiple things from one file
