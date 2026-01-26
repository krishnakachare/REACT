import Logo from "../../assets/images/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

//? Header Component
export const Header = () => {
  console.log(
    "Header Component is Rendered initially and Re-Rendered everytime Login/Logout Button is clicked!!!"
  );

  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/about">About Us</a>{" "}
            {/*Not recommended as it will refresh the whole page. We want to move to different page without reloading the whole page*/}
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
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

