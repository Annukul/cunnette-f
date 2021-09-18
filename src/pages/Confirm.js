import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Confirm = ({ history }) => {
  const [status, setStatus] = useState("");

  const location = useLocation();
  const verificationcode = location.pathname.split("/")[2];

  console.log(verificationcode);

  const verify = async () => {
    await axios.post(
      `https://cunnette.herokuapp.com/auth/confirm/${verificationcode}`
    );
    setStatus(true);
    setTimeout(() => {
      history.push("/login");
    }, 3000);
  };

  return (
    <div>
      <button onClick={verify}>Verify</button>
      {status ? <div>Your email is verified</div> : <div></div>}
    </div>
  );
};

export default Confirm;
