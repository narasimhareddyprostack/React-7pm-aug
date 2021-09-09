import React from "react";
import { incrAction, decrAction } from "../../redux/Product/product.action";
import { useDispatch, useSelector } from "react-redux";
let Product = () => {
  let dispatch = useDispatch();
  let product = useSelector((state) => {
    return state.product;
  });

  let incrHanlder = () => {
    dispatch(incrAction());
  };
  let decrHanlder = () => {
    dispatch(decrAction());
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Iamge</th>
                  <th>Price</th>
                  <th>QTY</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{product.product_Name}</td>
                  <td>
                    <img src={product.image} width="100px" height="75px" />
                  </td>
                  <td>{product.price}</td>
                  <td>
                    <i className="fa fa-minus-circle" onClick={decrHanlder}></i>
                    {product.qty}
                    <i className="fa fa-plus-circle" onClick={incrHanlder}></i>
                  </td>
                  <td>{product.qty * product.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
