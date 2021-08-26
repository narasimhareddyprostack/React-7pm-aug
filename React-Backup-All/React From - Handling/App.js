import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Registration from "./components/Form/Registration";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Registration />
      </div>
    );
  }
}

export default App;
