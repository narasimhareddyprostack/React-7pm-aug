/*
1. import React
2. Create class should extends React.Componet
3. render(){} to return UI
4. export component

*/
import React, { Component } from "react";

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <h1>Component Name: Employee List</h1>
        <>{JSON.stringify(this.props)}</>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.props.emp.map((employee) => {
              return (
                <tr>
                  <td>{employee.name}</td>
                  <td>{employee.salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeList;
