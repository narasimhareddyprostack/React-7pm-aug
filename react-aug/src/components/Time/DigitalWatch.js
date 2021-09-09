import React, { Component } from "react";
class DigitalWatch extends Component {
  constructor(props) {
    super(props);
    console.log("First");
    this.state = { currentTime: new Date().toLocaleTimeString() };
  }
  componentDidMount() {
    console.log("Birth");
    this.time = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 5000);
  }
  componentWillUnmount() {
    console.log("Death/while removing component from DOM/Wall");
    clearInterval(this.time);
  }

  render() {
    console.log("Second");
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-primary">
                  {this.state.currentTime}
                </div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DigitalWatch;
