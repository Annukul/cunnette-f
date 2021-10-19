import React from "react";
import { Fragment } from "react";
import "../../App.css";

const AuthNavbar = () => {
  return (
    <Fragment>
      <input type="checkbox" name="" id="barcheck" />
      <i id="cross" class="fas fa-times"></i>
      <i id="bar" class="fas fa-bars"></i>
      <div class="nav">
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
