import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Reset from './pages/Reset';
import Reset2 from "./pages/Reset2";
import Confirm from './pages/Confirm';
import AddUserDetail from './pages/AddUserDetails';
import GetUserDetails from './pages/GetUserDetails';
import UpdateUserDetail from './pages/UpdateUserDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/create" exact component={Create} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/password-reset" exact component={Reset} />
        <Route
          path="/auth/password-reset/:userId/:token"
          exact
          component={Reset2}
        />
        <Route path="/confirm/:verificationcode" exact component={Confirm} />
        <Route path="/adduserdetails" exact component={AddUserDetail} />
        <Route path="/getuserdetails/:id" exact component={GetUserDetails} />
        <Route path="/updateuserdetails" exact component={UpdateUserDetail} />
      </div>

    </Router>
  );
}

export default App;
