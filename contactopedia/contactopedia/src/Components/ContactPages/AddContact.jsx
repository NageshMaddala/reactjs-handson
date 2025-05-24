import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }

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

    const response = this.props.handleAddContact({
      name: name,
      email: email,
      phone: phone,
    });

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
            <div className="col-12 text-white-50">Add a new Contact</div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="text"
                className="form-control formcontrol-sm"
                placeholder="Name..."
                name="contactName"
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="text"
                className="form-control formcontrol-sm"
                placeholder="Email..."
                name="contactEmail"
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="text"
                className="form-control formcontrol-sm"
                placeholder="Phone..."
                name="contactPhone"
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

            <div className="col-12 col-md-6 offset-md-3 p-1">
              <button className="btn btn-primary btn-sm form-control">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
