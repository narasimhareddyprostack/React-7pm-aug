import React from "react";
import Axios from "axios";
class User extends React.Component {
  constructor(props) {
    super(props);
    console.log("First...Constructor");
    this.state = { users: [], message: "Hello" };
  }
  componentDidMount() {
    console.log("Third ... Did Mount ..");
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        this.setState({ users: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    console.log("Death... WillInMount");
  }
  getUserData = () => {};
  render() {
    console.log("Second .. Render");
    return (
      <>
        <pre> Message{JSON.stringify(this.state)}</pre>

        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Website</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.length > 0 ? (
                    <React.Fragment>
                      {this.state.users.map((user) => {
                        return (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default User;
