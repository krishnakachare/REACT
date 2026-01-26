import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("From setInterval");
    }, 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        //? Accessing/Consuming context in class component. Since classes don't have Hooks, this is how we can use it.
        <div>
          LoggedIn User from React Context :
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              return (
                <h1>
                  <b>{loggedInUser}</b>
                </h1>
              );
            }}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Batman"} power={"Suits"} />
      </div>
    );
  }
}

export default About;
