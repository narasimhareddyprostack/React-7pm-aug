import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactApp from "./components/Contact/ContactApp";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/contact" component={ContactApp} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
