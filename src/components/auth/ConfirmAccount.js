import React, { useState, Fragment } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { API } from "../config/Api";

const Confirm = ({ history }) => {
  const [status, setStatus] = useState("");

  const location = useLocation();
  const verificationcode = location.pathname.split("/")[2];

  console.log(verificationcode);

  const verify = async () => {
    const verify = await axios.post(`${API}/auth/confirm/${verificationcode}`);
    console.log(verify);
    setStatus(true);
    setTimeout(() => {
      history.push("/login");
    }, 3000);
  };

  return (
    <Fragment>
      <div class="lu">
        <button onClick={verify}>Verify</button>
        {status ? <div>Your email is verified</div> : <div></div>}
      </div>
    </Fragment>
  );
};

export default Confirm;
