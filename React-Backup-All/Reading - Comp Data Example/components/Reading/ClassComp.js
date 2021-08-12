import React from "react";
class ClassComp extends React.Component {
  name = "kavitha";
  salary = 45000;
  employee = { name: "Surya", loc: "Bangalroe" };
  colors = ["black", "red", "yellow"];
  render() {
    return (
      <>
        <h2>Name: {this.name}</h2>
        <h2>Salary:{this.salary}</h2>
        <h3>Employee Loc:{this.employee.loc}</h3>
        <h4>Color: {this.colors[2]}</h4>
      </>
    );
  }
}
export default ClassComp;
