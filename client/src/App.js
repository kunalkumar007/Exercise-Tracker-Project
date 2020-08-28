import React from "react";
import Navbar from "./components/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Exercise from "./components/exercise.component";
import Log from "./components/exercise-list.component";
import User from "./components/user.component";
import Home from "./components/home.component";

function App() {
  return (
    <Router>
    <Navbar/>
      
        <Route path="/"   exact component={Home} />
        <Route path="/exercise" component={Exercise} />
        <Route path="/exercise-list" component={Log} />
        <Route path="/user" component={User} />
      
    </Router>
  );
}

export default App;
