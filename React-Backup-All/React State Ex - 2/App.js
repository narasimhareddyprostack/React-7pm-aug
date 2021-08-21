import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Product />
      </div>
    );
  }
}

export default App;
