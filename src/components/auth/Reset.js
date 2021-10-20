import React, { useState, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { API } from "../config/Api";

const Reset2 = () => {
  const [password, setPassword] = useState("");
  let { userId, token } = useParams();
  console.log(userId);
  console.log(token);
  const passwordResetHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${API}/auth/password-reset/` + userId + "/" + token,
        { password }
      );
      console.log("Success" + data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="su">
        <form onSubmit={passwordResetHandler}>
          <div className="dtls">
            <h1>RESET PASSWORD</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />

          <div className="buttons">
            <button type="submit">Reset</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Reset2;
