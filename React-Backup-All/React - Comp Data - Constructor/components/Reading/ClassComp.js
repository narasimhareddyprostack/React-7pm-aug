import React from "react";
class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    console.log("First Constructor execture automatically");
  }
  name = "kavitha";
  salary = 45000;
  employee = { name: "Surya", loc: "Bangalroe" };
  colors = ["black", "red", "yellow"];
  get_Details() {
    console.log("Hello......................");
    console.log("...Testing");
  }
  render() {
    console.log("Render - Second");
    return (
      <>
        <h2>Name: {this.name}</h2>
        <h2>Salary:{this.salary}</h2>
        <h3>Employee Loc:{this.employee.loc}</h3>
        <h4>Color: {this.colors[2]}</h4>
        {this.get_Details()}
      </>
    );
  }
}
export default ClassComp;
