import React, { Fragment, useState } from "react";
import axios from "axios";
import { API } from "../config/Api";

const Reset = ({ history }) => {
  const [emailId, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(emailId);
      await axios.post(`${API}/auth/password-reset-request`, { emailId });
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
            <h1>RESET PASSWORD REQUEST</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <input
            type="text"
            name="email"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div class="buttons">
            <button type="submit">Send Reset Mail</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Reset;
