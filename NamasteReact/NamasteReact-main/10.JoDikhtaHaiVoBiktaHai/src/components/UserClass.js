//? Class Component is a normal JS class which extend React component and has a render method that returns JSX.

//? React.Component is a class that is given to us by React and here UserClass inherits some properties from it.
import React from "react";

class UserClass extends React.Component {
  //To receive props we use contructor and super keys.
  constructor(props) {
    super(props);
    // console.log("Class Props", props);

    // Changing the state in class component
    this.state = {
      count: 0,
      log: "Login", // Creating 2nd state, we can do it inside 1 state variable only. No need to create a seperate one.
      userInfo: {
        name: "Dummy Name",
        location: "Default Location",
      },
    };
    console.log(this.props.name + " Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " Component Did Mount!");
  }

  async componentDidMount() {
    // API Call
    const data = await fetch("https://api.github.com/users/Swati-Tanu");
    const json = await data?.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  // Here render method returns some piece of JSX
  render() {
    console.log(this.props.name + " Child Render");
    return (
      <div className="user-card">
        <h1>Class Component</h1>
        <h2>Count = {this.state.count}</h2>
        <button
          // Updating the state
          onClick={() => {
            // Never update state variable directly as below:
            // this.state.count = this.state.count + 1 (Won't work!!!)
            this.setState({
              count: this.state.count + 1,
              log: this.state.log === "Login" ? "Logout" : "Login", //To update 2 states we can do it inside 1 setState only. No need to create a seperate one.
            });
          }}
        >
          Count
        </button>
        <h2>Sign In/Out = {this.state.log}</h2>
        {/* <h2>Name: {this.props.name}</h2> */}
        {/* <h3>Power: {this.props.power}</h3> */}
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Loaction: {this.state.userInfo.location}</h3>
      </div>
    );
  }
}

export default UserClass;

// ? Loading a class component means creating an instance of that class.
