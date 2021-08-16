import React from "react";
let CompB = (props) => {
  return (
    <>
      <h2>Compoent B</h2>
      <pre>{JSON.stringify(props)}</pre>
      <h1>Hero Name : {props.heroName}</h1>
      <h2>Movie Name: {props.movie}</h2>
    </>
  );
};
export default CompB;
