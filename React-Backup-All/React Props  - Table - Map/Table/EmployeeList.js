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
        {/* <>{JSON.stringify(this.props)}</> */}
        <div className="container mt-4">
          <div className="row">
            <div class="col-md-8">
              <table border="1" className="table table-dark">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.emp.map((employee) => {
                    return (
                      <tr>
                        <td>{employee.id}</td>
                        <td>{employee.first_name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.gender}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeList;
