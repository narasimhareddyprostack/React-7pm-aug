import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
class Employee extends Component {
  employees = [
    { name: "Rahul", salary: 45000 },
    { name: "vinay", salary: 50000 },
    { name: "Vijay", salary: 65000 },
    { name: "Karan", salary: 70000 },
  ];
  render() {
    return (
      <div>
        <h1>Component Name : Employee</h1>
        <hr />
        <EmployeeList emp={this.employees} />
      </div>
    );
  }
}

export default Employee;
