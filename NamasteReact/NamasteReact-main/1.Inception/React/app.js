//? One tag 
const heading = React.createElement(
  "h1", // tag
  { id: "heading" }, // attribute
  "Hello World from React using CDN Links!" // content
);

//? React element at the end the day is an object.
console.log("heading", heading);

//? Nested tags
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am H1 tag"),  React.createElement("h2", {}, "I am H2 tag")]),
    React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "I am H1 tag"),  React.createElement("h2", {}, "I am H2 tag")])
  ]
);

//? Define root
const root = ReactDOM.createRoot(document.getElementById("root"));

//? Render to root
root.render(heading);
// root.render(parent);

//! 1. React.createElement => React Element (Js-Object) => HTML Element (Browsers understand)
//! 2. props are children + attributes
