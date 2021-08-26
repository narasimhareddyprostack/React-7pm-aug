import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Registration from "./components/Form/Registration";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/registration" component={Registration} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
