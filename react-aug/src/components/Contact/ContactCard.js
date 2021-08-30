import React from "react";
class ContactCard extends React.Component {
  render() {
    let { detailContact } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <img src={detailContact.picture.large} />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      {detailContact.name.first}
                    </li>

                    <li className="list-group-item">
                      {detailContact.location.state}
                    </li>
                    <li className="list-group-item">{detailContact.email}</li>
                    <li className="list-group-item">{detailContact.dob.age}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactCard;
