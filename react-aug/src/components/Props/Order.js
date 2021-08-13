import React, { Component } from "react";

class Order extends Component {
  render() {
    return (
      <div>
        <hr />
        <h2>Order Component</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>Product Name :{this.props.name} </h1>
        <h2>color: {this.props.color[2]}</h2>
        <h3>Product Price:{this.props.details.price} </h3>
      </div>
    );
  }
}

export default Order;
