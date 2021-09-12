import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Create from './pages/Create';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/signup" exact render={() => <Signup />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/create" exact render={() => <Create />} />
        <Route path="/profile" exact render={() => <Profile />} />
      </div>
    </Router>
  );
}

export default App;
