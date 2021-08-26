import React, { Fragment } from "react";
class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
      },
      type: "password",
    };
  }
  regiHandler = (event) => {
    console.log(this.state.user);
    event.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3>Login</h3>
                  {JSON.stringify(this.state.user)}
                </div>
                <div className="card-body">
                  <form onSubmit={this.regiHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User Name"
                        onChange={(event) => {
                          this.setState({
                            user: {
                              ...this.state.user,
                              name: event.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        onChange={(event) => {
                          this.setState({
                            user: {
                              ...this.state.user,
                              email: event.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(event) => {
                          this.setState({
                            user: {
                              ...this.state.user,
                              password: event.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <div class="input-group" id="show_hide_password">
                        <input class="form-control" type={this.state.type} />
                        <div className="input-group-addon">
                          <a href="">
                            <i
                              class="fa fa-eye-slash"
                              aria-hidden="true"
                              onClick={() => {
                                this.setState({ type: "text" });
                              }}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-success">Registration</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Registration;
