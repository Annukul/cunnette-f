import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userActions";

import "../../App.css";

const Signup = ({ history }) => {
  const [user, setUser] = useState({
    userName: "",
    fullName: "",
    emailId: "",
    password: "",
    confirmPassword: "",
  });

  const { userName, fullName, emailId, password, confirmPassword } = user;

  const dispatch = useDispatch();

  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, fullName, emailId, password, confirmPassword);
    if (password !== confirmPassword) {
      return console.log("Password Dosent match");
    }
    dispatch(register(userName, fullName, emailId, password));
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div class="su">
        <form onSubmit={handleSubmit}>
          <div class="dtls">
            <h1>SIGN UP</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <input
            type="text"
            name="userName"
            placeholder="Username"
            onChange={onChange}
          />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={onChange}
          />
          <input
            type="email"
            name="emailId"
            placeholder="Email"
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={onChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={onChange}
          />
          <div class="buttons">
            <button type="submit">Register</button>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Signup;
