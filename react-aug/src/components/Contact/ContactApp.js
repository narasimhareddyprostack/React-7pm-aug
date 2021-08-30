import React from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    console.log("First Constructor Execute - Special Method");
    this.state = {
      contacts: [],
      errMessage: null,
      selectedContact: {},
    };
  }
  pullData = (contact) => {
    this.setState({ selectedContact: contact });
  };
  componentDidMount() {
    let url =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(url)
      .then((response) => {
        console.log(response.data);
        this.setState({ contacts: response.data });
      })
      .catch(() => {});
    console.log("3rd Component Did Mount ");
  }

  render() {
    console.log("Second - Render Method");
    return (
      <React.Fragment>
        <h2>Contact App</h2>
        {/*  <pre>{JSON.stringify(this.state)}</pre>
        <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ContactList
                contacts={this.state.contacts}
                message="Good Morning"
                pullData={this.pullData}
              />
            </div>
            <div className="col-md-4">
              {Object.keys(this.state.selectedContact).length > 0 ? (
                <>
                  <ContactCard detailContact={this.state.selectedContact} />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactApp;
