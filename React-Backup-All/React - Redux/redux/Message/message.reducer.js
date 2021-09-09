import { GM, GN } from "./message.action";
let initialState = {
  message: "Hello......",
};
let messageReducer = (state = initialState, action) => {
  console.log("Inside Reducer - Message Reducer");
  switch (action.type) {
    case "GM":
      return { message: "Good Morning" };
    case "GN":
      return { message: "Good Night " };
    default:
      return state;
  }
};

export { messageReducer };
//reducer is pure function, it will take two arguments
// state
// action
