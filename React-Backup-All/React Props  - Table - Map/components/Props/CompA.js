import React from "react";
import CompB from "./CompB";
let CompA = () => {
  let name = "RajiniKanth";
  let movieName = "Robo-1";
  return (
    <>
      <h1>Component A</h1>
      <hr />
      <CompB heroName={name} movie={movieName} />
    </>
  );
};
export default CompA;
