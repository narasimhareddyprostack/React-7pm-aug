//Action Types
const INCR = "INCR";
const DECR = "DECR";

//Actions
let incrAction = () => {
  //invoking API
  return { type: INCR };
};
let decrAction = () => {
  return { type: DECR };
};

export { incrAction, decrAction, INCR, DECR };
//Redux action is function - it return actionable object
