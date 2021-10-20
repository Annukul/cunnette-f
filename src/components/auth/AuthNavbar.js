import React from "react";
import { Fragment } from "react";
import "../../App.css";

const AuthNavbar = () => {
  return (
    <Fragment>
      <input type="checkbox" name="" id="barcheck" />
      <i id="cross" className="fas fa-times"></i>
      <i id="bar" className="fas fa-bars"></i>
      <div className="nav">
        <ul>
          <li>About</li>
          <li>Home</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default AuthNavbar;
