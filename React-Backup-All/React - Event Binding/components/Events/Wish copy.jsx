import React, { Component } from "react";

class Wish extends Component {
  constructor(props) {
    console.log("First Contrtuctor Will execute");
    super(props);
    this.state = {
      message: "Hello",
    };
  }
  gmHandler = () => {
    console.log("Test Case 123 : inside Change Message Method");
    this.setState({ message: "Good Morning" });
  };
  gnHanlder() {
    this.setState({ message: "Good Night" });
  }
  render() {
    console.log("Second - Render Method");
    return (
      <div>
        <h1> Message: {this.state.message}</h1>
        <button onClick={this.gmHandler}> GM</button>
        <button
          onClick={() => {
            this.gnHanlder();
          }}
        >
          GN
        </button>
      </div>
    );
  }
}

export default Wish;
