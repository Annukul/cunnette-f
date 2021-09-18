import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Reset2 = () => {
  const [password, setPassword] = useState("");
  let { userId, token } = useParams();
  console.log(userId);
  console.log(token);
  const passwordResetHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/auth/password-reset/" + userId + "/" + token,
        { password }
      );
      console.log("Success" + data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form method="POST" data-netlify-recaptcha="true" data-netlify="true" onSubmit={passwordResetHandler}>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default Reset2;
