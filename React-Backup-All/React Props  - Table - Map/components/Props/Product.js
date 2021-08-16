import React, { Component } from "react";
import Order from "./Order";
class Product extends Component {
  product_Name = "iphone 5s";
  color = ["White", "gray", "red"];
  more_Details = {
    price: 45000,
    usage: "Very Delicate - Performance is goog",
  };
  render() {
    return (
      <div>
        <h2>Product Component...</h2>
        <h1>Product Name: {this.product_Name}</h1>
        <Order
          name={this.product_Name}
          color={this.color}
          details={this.more_Details}
        />
      </div>
    );
  }
}

export default Product;
