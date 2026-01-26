// ? This component is created using Class Component

import React from "react";
// import User from "./User"; // Functional Component
import UserClass from "./UserClass"; // Class Component

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    //* API Call is made here
    console.log("Parent Component Did Mount!");
    //* Reason why we need to unmount!
    this.timer = setInterval(() => {
      console.log("From setInterval");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update!");
  }
  
  componentWillUnmount() {
    console.log("Component Will Unmount - About page");
    //* This is how we clear the interval we started in componentDidUpdate()
    clearInterval(this.timer);
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        {/* <User name={"Tony Stark"} power={"Suits"} /> */}
        {/* <br /> */}
        <UserClass name={"Batman"} power={"Suits"} />
        <br />
        {/* <UserClass name={"Tony Stark"} power={"Suits"} /> */}
      </div>
    );
  }
}

export default About;

//! In Mounting Phase
//? 1. In CBC, first the constructor is called then the render is called.
//? 2. If Parent is FBC and child is CBC, things are straightforward.
//? 3. If Parent and Child both are CBC, then first the constructor and render of parent is called then the constructor and render of child is called.
//? 4. componentDidMount is used similar to useEffect. Note similar but not same. Similar to useEffect, once the component is rendered then componentDidMount is called. But these both are not equivalent.
//? 5. In case componentDidMount is present in both Child and Parent component, then first child's componentDidMount will be called then parent's componentDidMount will be called.

//! Why the below happens?
//? In case of multiple children, first - parent constructor -> parent render -> child1 constructor -> child1 render -> child2 constructor -> child2 render -> componentDidMount of child1 -> componentDidMount of child2 -> componentDidMount of parent
//! It is because React is trying to optimize by batching the render phase of the two child, then the commit phase (componentDidMount) will take place. This is one of the reason React is fast. Some other reasons are reconciliation process (diff algo), single page app (component gets replace and not the whole page is refreshed), etc.
//? Refer: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

//! Updating Phase
//? 1. setState() is called
//? 2. Render method is called again (with API data)
//? 3. componentDidUpdate t is called

//! Unmounting Phase
//? As soon as we go to any other page/component, componentWillUnmount will be called.
