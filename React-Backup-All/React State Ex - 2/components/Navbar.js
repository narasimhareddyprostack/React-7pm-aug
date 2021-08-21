import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a href="/home" className="navbar-brand">
            React State Example
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
