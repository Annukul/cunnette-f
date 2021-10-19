import React from "react";
import { Fragment } from "react";
import "../../App.css";

const AuthFooter = () => {
  return (
    <Fragment>
      <footer>
        <p>All Rigts Reserved &copy; 2021</p>
        <div className="icons">
          <i className="fab fa-github"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </footer>
    </Fragment>
  );
};

export default AuthFooter;
