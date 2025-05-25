import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }

  handleCancel = (event) => {
    event.preventDefault();
    this.props.cancelUpdateContact();
  };

  handleAddContactFormSubmit = (event) => {
    // javascript is case sensitive
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    // event.target is the form element
    // event.target.contactName is the input element with name="contactName"
    // event.target.contactName.value is the value of the input element
    const name = event.target.contactName.value.trim();
    const email = event.target.contactEmail.value.trim();
    const phone = event.target.contactPhone.value.trim();

    let response = undefined;
    if (this.props.isUpdating) {
      response = this.props.handleUpdateContact({
        name: name,
        email: email,
        phone: phone,
        id: this.props.selectedContact.id,
      });
    } else {
      response = this.props.handleAddContact({
        name: name,
        email: email,
        phone: phone,
      });
    }

    if (response.status === "success") {
      this.setState({ errorMessage: undefined, successMessage: response.msg });
      document.querySelector(".contact-form").reset();
    } else {
      this.setState({ errorMessage: response.msg, successMessage: undefined });
    }
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleAddContactFormSubmit}
          className="contact-form"
        >
          <div className="border row text-white p-2">
            <div className="col-12 text-white-50">
              {this.props.isUpdating ? "Update Contact" : "Add a new Contact"}
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="text"
                className="form-control formcontrol-sm"
                placeholder="Name..."
                name="contactName"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.name : ""
                }
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="text"
                className="form-control formcontrol-sm"
                placeholder="Email..."
                name="contactEmail"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.email : ""
                }
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="text"
                className="form-control formcontrol-sm"
                placeholder="Phone..."
                name="contactPhone"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.phone : ""
                }
              />
            </div>

            {this.state.errorMessage === undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-danger">
                {this.state.errorMessage}
              </div>
            )}
            {this.state.successMessage === undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-success">
                {this.state.successMessage}
              </div>
            )}

            {/* <div className="col-12 col-md-6 offset-md-3 p-1"> */}
            <div
              className={`col-12 p-1 ${
                this.props.isUpdating
                  ? "col-md-4 offset-md-2"
                  : "col-md-6 offset-md-3 align-self-center"
              }`}
            >
              <button className="btn btn-primary btn-sm form-control">
                {this.props.isUpdating ? "Update" : "Create"}
              </button>
            </div>
            <div className="col-12 col-md-4 p-1">
              {this.props.isUpdating && (
                <button
                  className="btn btn-secondary form-control btn-sm"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
