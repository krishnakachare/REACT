import Logo from "../../assets/images/logo.jpg";
import { useState } from "react";

//? Header Component
export const Header = () => {
  console.log(
    "Header Component is Rendered initially and Re-Rendered everytime Login/Logout Button is clicked!!!"
  );
  // JS variable
  // let btnName = "Login";

  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            //! Normal JS click logic which works but won't update UI.
            // onClick={() => {
            //   btnName = "Logout";
            //   console.log("btnName", btnName);
            // }}
            //? Problem gets solved using local state variable in React
            onClick={() => {
              if (btnName === "Login") {
                setBtnName("Logout");
              } else {
                setBtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

//* Even incase of changing the state of just the button by using on click, the whole Header component is rendered/re-rendered again.

//* This is the how even if we define useState using const, we are still able to update it's value. The reason is since the whole component is rendered again so this time the btnName is a brand new variable.

//* Happens because of diff algo -- Reconciliation process.

//? Whenever state variables updates. react triggers a reconciliation cycle(re-renders the whole component)
