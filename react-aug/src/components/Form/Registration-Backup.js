import React, { Component } from "react";
class Registration extends Component {
  state = {
    userName: "",
    emailId: "",
    password: "",
  };
  formData = (event) => {
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">{JSON.stringify(this.state)}</div>
                <div className="card-body">
                  <form onSubmit={this.formData}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User Name"
                        onChange={this.formData}
                        name="userName"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        onChange={this.formData}
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.formData}
                        name="password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-success form-control"
                        value="Login"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
