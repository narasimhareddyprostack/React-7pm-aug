import React from "react";
import Navbar from "./components/Navbar";
import FunComp from "./components/Reading/FunComp";
import ClassComp from "./components/Reading/ClassComp";
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <hr />
        <FunComp />
        <hr />
        <ClassComp />
      </>
    );
  }
}

export default App;
