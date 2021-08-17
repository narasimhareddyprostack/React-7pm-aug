import React from "react";
class Product extends React.Component {
  state = {
    counter: 0,
  };
  incrHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrHanlder = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    console.log("Test Case 1 - inside render Method");
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Qty : {this.state.counter}</div>
                <div className="card-body">
                  <button
                    className="btn btn-success mr-4"
                    onClick={this.decrHanlder}
                  >
                    DECR
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={this.incrHandler}
                  >
                    INCR
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
export default Product;
