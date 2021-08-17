import React from "react";
class Wish extends React.Component {
  state = {
    message: "Hello",
  };

  changeMessage = () => {
    console.log("Testing 123");
    this.setState({
      message: "Good Morning",
    });
  };
  changeMessageGA = () => {
    this.setState({
      message: "Good Afternoon",
    });
  };
  changeMessageGN = () => {
    this.setState({ message: "Good Night" });
  };
  render() {
    return (
      <>
        <h1> Message : {this.state.message}</h1>
        <button onClick={this.changeMessage}> GM</button>
        <button onClick={this.changeMessageGA}> GA</button>
        <button onClick={this.changeMessageGN}>GN</button>
      </>
    );
  }
}
export default Wish;
