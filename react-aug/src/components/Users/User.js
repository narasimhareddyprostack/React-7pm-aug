import React from "react";
import Axios from "axios";
class User extends React.Component {
  constructor(props) {
    super(props);
    console.log("First...Constructor");
    this.state = { movie: [], message: "Hello" };
  }
  componentDidMount() {
    console.log("Third ... Did Mount ..");
    Axios.get("https://wookie.codesubmit.io/movies", {
      headers: { Authorization: "Bearer Wookie2019" },
    })
      .then((response) => {
        console.log(response.data);
        this.setState({ movie: response.data });
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
          <h2>Action</h2>
          <div className="row">
            {Object.keys(this.state.movie).length > 0 ? (
              <>
                {this.state.movie.movies.map((movie) => {
                  if (movie.genres[0] == "Action") {
                    return (
                      <div className="col-md-3">
                        <div className="card text-center">
                          <div className="card-header bg-white">
                            <img
                              src={movie.backdrop}
                              alt=""
                              className="image-fluid"
                              height="120px"
                            />
                          </div>
                          <div className="card-body">
                            <ul className="list-group">
                              <li className="list-group-item">
                                {movie.length}
                              </li>
                              <li className="list-group-item">
                                {movie.director}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </>
            ) : null}
          </div>
        </div>
        <div className="container">
          <h2>Crime</h2>
          <div className="row">
            {Object.keys(this.state.movie).length > 0 ? (
              <>
                {this.state.movie.movies.map((movie) => {
                  if (movie.genres[1] == "Crime") {
                    return (
                      <div className="col-md-3">
                        <div className="card text-center">
                          <div className="card-header bg-white">
                            <img
                              src={movie.backdrop}
                              alt=""
                              className="image-fluid"
                              height="120px"
                            />
                          </div>
                          <div className="card-body">
                            <ul className="list-group">
                              <li className="list-group-item">
                                {movie.length}
                              </li>
                              <li className="list-group-item">
                                {movie.director}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </>
            ) : null}
          </div>
        </div>
        <div className="container">
          <h2>Crime</h2>
          <div className="row">
            {Object.keys(this.state.movie).length > 0 ? (
              <>
                {this.state.movie.movies.map((movie) => {
                  if (movie.genres[3] == "Drama") {
                    return (
                      <div className="col-md-3">
                        <div className="card text-center">
                          <div className="card-header bg-white">
                            <img
                              src={movie.backdrop}
                              alt=""
                              className="image-fluid"
                              height="120px"
                            />
                          </div>
                          <div className="card-body">
                            <ul className="list-group">
                              <li className="list-group-item">
                                {movie.length}
                              </li>
                              <li className="list-group-item">
                                {movie.director}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
export default User;
