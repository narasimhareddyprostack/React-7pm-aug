import { combineReducers } from "redux";
import { messageReducer } from "./Message/message.reducer";
import { productReducer } from "./Product/product.reducer";

let rootReducer = combineReducers({
  message: messageReducer,
  product: productReducer,
});

export { rootReducer };
