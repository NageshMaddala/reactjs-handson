import React from "react";

function AddDestination() {
  return (
    <div className="row col-8 offset-2">
      <form>
        <div className="row col-8 offset-2">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city"
            />
          </div>
          <div className="col-5 p1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter country"
            />
          </div>
          <div className="col-2 p1">
            <button className="btn btn-success form-control">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
