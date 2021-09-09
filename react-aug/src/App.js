import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DigitalWatch from "./components/Time/DigitalWatch";
import Form from "./components/Form/Form";
import Digital from "./components/Time/Digital";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/time" component={Digital} />
            <Route path="/form" component={Form} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
