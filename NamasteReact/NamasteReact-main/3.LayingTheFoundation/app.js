import React from "react";
import ReactDOM from "react-dom/client";

//! JSX => React.createElement => React Element (Js-Object) => HTML Element (Browsers understand)
// * React Element using JSX
const heading = (
  <h1 id="heading" className="head">
    "Hello World from JSX!"
  </h1>
);

console.log("heading:", heading); // This also is an object as it is a React element created using JSX (JavaScript XML), an HTML like syntax.

//* React Functional Component
const HeadingComponent = () => {
  return <h1>Hello from Functional Heading Component!</h1>;
};

//? Syntatic sugar
const HeadingComponent2 = () => (
  <h1>Hello from Heading Functional Component2!</h1>
);

//* Component Composition
const HeadingComponent3 = () => (
  <div className="container">
    {/* Rendering component inside another component */}
    <TitleComponent />
    {/* The below is also the same thing */}
    <TitleComponent></TitleComponent>
    {/* We can also call a component like a function  */}
    {TitleComponent()} 
    {/* Rendering element inside another component */}
    {heading}
    <h1 className="heading">Hello from Heading Functional Component3!</h1>
  </div>
);

const TitleComponent = () => {
  return <h1>Hello from Functional Title Component!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //? This is how we render React Element
root.render(<HeadingComponent />); //? This is how we render React Component
root.render(<HeadingComponent3 />); //? Rendering component inside component

//* 1. JSX => React.createElement => React Element (Js-Object) => HTML Element (Browsers understand)
//* 2. With the help of Babel JSX is converted to React.createElement.
//* 3. Babel is a JS compiler and has a lot of responsiblities like if some older browser don't understand ES6, Babel transpiles ES6 code to one that older browser understand.
//* 4. Component Composition: It is rendering component inside another component.
//* 5. JSX takes care of malicious attacks like cross site scripting by santizing data.

