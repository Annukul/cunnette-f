import React, { useState } from "react";
import axios from "axios";

const Reset = ({ history }) => {
  const [emailId, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(emailId);
      await axios.post("/auth/password-reset-request", { emailId });
      history.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Reset;
