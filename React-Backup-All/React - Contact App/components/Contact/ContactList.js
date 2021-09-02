import React from "react";
class ContactList extends React.Component {
  selectedContact = (contact) => {
    this.props.pullData(contact);
  };
  render() {
    let { contacts } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          {/*   <pre>{JSON.stringify(this.props)}</pre> */}
          <div className="row">
            <div className="col">
              <table className="table table-hover table-dark">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Street Name</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.length > 0 ? (
                    <React.Fragment>
                      {contacts.map((contact) => {
                        return (
                          <tr
                            onMouseOver={this.selectedContact.bind(
                              this,
                              contact
                            )}
                          >
                            <td>{contact.name.first}</td>
                            <td>{contact.email}</td>
                            <td>{contact.location.city}</td>
                            <td>{contact.location.street.name}</td>
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
      </React.Fragment>
    );
  }
}

export default ContactList;
