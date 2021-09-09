import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Message from "./components/Message/Message";
import Product from "./components/Product/Product";
import { Provider } from "react-redux";
import { store } from "./redux/store";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/message" component={Message} />
              <Route path="/product" component={Product} />
            </Switch>
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
