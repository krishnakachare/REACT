import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1); // Creating 2nd state

  useEffect(() => {
    // API Call
    const timer = setInterval(() => {
      console.log("From setInterval Functional");
    }, 1000);

    // To clean up the setInterval a.k.a unmounting
    return () => {
      clearInterval(timer);
      console.log("useEffect Returned")
    };

  }, []);

  console.log("Function props", props);
  return (
    <div className="user-card">
      <h1>Functional Component</h1>
      <h2>Count = {count}</h2>
      <button
        // Updating the state
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
      <h2>Count2 = {count2}</h2>
      <h2>Name: {props.name}</h2>
      <h3>Power: {props.power}</h3>
    </div>
  );
};

export default User;
