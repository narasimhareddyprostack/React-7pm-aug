import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wish from "./components/Events/Wish";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Wish />
      </div>
    );
  }
}

export default App;
