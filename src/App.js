import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Create from "./components/Create";
import Profile from "./components/Profile";
import ResetRequest from "./components/auth/ResetRequest";
import Reset from "./components/auth/Reset";
import ConfirmAccount from "./components/auth/ConfirmAccount";
import AddUserDetail from "./components/AddUserDetails";
import GetUserDetails from "./components/GetUserDetails";
import UpdateUserDetail from "./components/UpdateUserDetails";
import AuthNavbar from "./components/auth/AuthNavbar";
import AuthFooter from "./components/auth/AuthFooter";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="dad">
        <div class="sec1">
          <AuthNavbar />
          <Route path={["/signup", "/register"]} exact component={Signup} />
          <Route path={["/", "/login"]} exact component={Login} />
          <Route path="/password-reset" exact component={ResetRequest} />
          <Route
            path="/auth/password-reset/:userId/:token"
            exact
            component={Reset}
          />
          <Route
            path="/confirm/:verificationcode"
            exact
            component={ConfirmAccount}
          />
          <AuthFooter />
        </div>
        <Route path="/home" exact component={Home} />
        <Route path="/create" exact component={Create} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/adduserdetails" exact component={AddUserDetail} />
        <Route path="/getuserdetails/:id" exact component={GetUserDetails} />
        <Route path="/updateuserdetails" exact component={UpdateUserDetail} />
      </div>
    </Router>
  );
}

export default App;
