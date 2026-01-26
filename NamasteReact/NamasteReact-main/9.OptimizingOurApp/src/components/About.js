import React from "react";
import UserClass from "./UserClass"; 

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("From setInterval");
    }, 1000);
  }

  componentDidUpdate() {
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name={"Batman"} power={"Suits"} />
      </div>
    );
  }
}

export default About;
