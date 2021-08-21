import React, { useState } from "react";
let Product = () => {
  let [counter, setCounter] = useState(1);

  function decrHanlder() {
    setCounter(counter - 1);
  }
  function incrHandler() {
    setCounter(counter + 1);
  }
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Qty : {counter}</div>
              <div className="card-body">
                <button className="btn btn-success mr-4" onClick={decrHanlder}>
                  DECR
                </button>
                <button className="btn btn-primary" onClick={incrHandler}>
                  INCR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
