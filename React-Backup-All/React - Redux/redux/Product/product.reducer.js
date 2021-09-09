import { INCR, DECR } from "./product.action";
let initialState = {
  product_Name: "Nokia 80 cm (32 inch) HD Ready LED Smart Android TV",
  image:
    "https://rukminim1.flixcart.com/image/224/224/kfwvcsw0/television/m/x/3/nokia-32tahdn-original-imafw8xg5rw87ukj.jpeg?q=90",
  qty: 1,
  price: 18500,
};
let productReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCR:
      return { ...state, qty: state.qty + 1 };
    case DECR:
      return { ...state, qty: state.qty - 1 };
    default:
      return state;
  }
};

export { productReducer };

//What is reducer?
/*
Redux - Reducer is pure funciton , it taking two argument state, action
- based on action.types - it will create/update redux store 


*/
