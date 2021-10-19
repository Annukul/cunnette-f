import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API } from "../config/Api";

import "../../App.css";

const Signup = ({ history }) => {
  const [userName, setUsername] = useState("");
  const [fullName, setName] = useState("");
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    console.log(userName, fullName, emailId, password);

    try {
      const { data } = await axios.post(
        `${API}/auth/signup`,
        { userName, fullName, emailId, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      history.push("/login");
    } catch (error) {
      console.log(error.message);
    }
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
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
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
