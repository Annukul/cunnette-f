import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "https://cunnette.herokuapp.com/auth/login",
        { userName, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={loginHandler}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/password-reset">Forgot password?</Link>
    </div>
  );
};

export default Login;
