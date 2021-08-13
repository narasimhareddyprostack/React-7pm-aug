import React from "react";
let FunComp = () => {
  let name = "kavitha";
  let salary = 45000;
  let employee = { name: "Surya", loc: "Bangalroe" };
  let colors = ["black", "red", "yellow"];
  return (
    <>
      <h1>Name:{name}</h1>
      <h2>Salary:{salary}</h2>
      <h3>Employee Name :{employee.name}</h3>
      <h4>Employee Loc:{employee.loc}</h4>
      <h5>Employee Color: {colors[2]}</h5>
    </>
  );
};

export default FunComp;
