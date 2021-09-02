//Action Type
const GM = "GM";
const GN = "GN";
//Action
let gmAction = () => {
  return { type: GM };
};

let gnAction = () => {
  return { type: GN };
};
export { gmAction, GM, gnAction, GN };

//named export

//What is Redux Action?
/*
Action function, it return actionable object

*/
