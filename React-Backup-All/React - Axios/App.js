import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import User from "./components/Users/User";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/users" component={User} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
