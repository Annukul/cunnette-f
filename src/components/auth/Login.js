import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";

const Login = ({ history }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/home");
    }
    if (error) {
      console.log(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, history]);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(login(userName, password));
  };

  return (
    <Fragment>
      <div class="lu">
        <form onSubmit={loginHandler}>
          <div class="dtls">
            <h1>LOG IN</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
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
          <Link to="/password-reset" id="fp">
            Forgot Password?
          </Link>
          <div class="buttons">
            <button type="submit">Login</button>
            <Link to="/signup">
              <button>Register</button>
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
