import React, { Component } from "react";

class Wish extends Component {
  constructor(props) {
    console.log("First Contrtuctor Will execute");
    super(props);
    this.state = {
      message: "Hello",
    };
  }
  messageHandler = (value) => {
    this.setState({ message: value });
  };
  render() {
    console.log("Second - Render Method");
    return (
      <>
        <div className="container mt-3">
          <div className="row">
            <div class="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3> Message: {this.state.message}</h3>
                </div>
                <div className="card-body">
                  <button
                    onClick={this.messageHandler.bind(this, "Good Morning")}
                    className="btn btn-success mr-4"
                  >
                    GM
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.messageHandler.bind(this, "Good After Noon")}
                  >
                    GA
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={this.messageHandler.bind(this, "Good Night")}
                  >
                    GN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Wish;
