import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

// this is class based component
// we created this component to maintain the state of the application
// and to manage the contact list
class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "ben@dotnetmastery.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "111-222-0000",
          email: "kathy@dotnetmastery.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Paul Show",
          phone: "999-222-1111",
          email: "paul@dotnetmastery.com",
          isFavorite: true,
        },
      ],
    };
  }

  // this function will be called from AddContact component
  // this function will be called when the user clicks on the Add Contact button
  // this function will be called when the user submits the form
  // Validation can be done here or Add Contact component
  // But will be doing validation here in this function, so that we can do additional validation
  // like checking if the contact already exists or not
  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "failure", msg: "Please Enter a valid Name" };
    } else if (newContact.phone === "") {
      return { status: "failure", msg: "Please Enter a valid Phone" };
    }

    // eslint-disable-next-line array-callback-return
    const duplicateRecord = this.state.contactList.filter((contact) => {
      if (
        contact.name === newContact.name &&
        contact.phone === newContact.phone
      ) {
        return true;
      }
    });

    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      // this function will be called from AddContact component
      const newFinalContact = {
        ...newContact, // spread operator is used to copy the properties of newContact object
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };

      // this.setState((prevState) => ({
      //   contactList: [...prevState.contactList, newFinalContact],
      // }));

      this.setState((prevState) => ({
        contactList: prevState.contactList.concat(newFinalContact),
      }));
    }
    return { status: "success", msg: "Contact was Added Successfully" };  
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact handleAddContact={this.handleAddContact} />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContacts
                  contacts={this.state.contactList.filter(
                    (c) => c.isFavorite === true
                  )}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (c) => c.isFavorite === false
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
