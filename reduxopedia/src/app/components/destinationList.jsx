import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { destinationClicked } from "../../redux/slice/destinationSlice";

function DestinationList() {
  const destinationList = useSelector(
    (state) => state.destinationStore.destinations
  );
  const dispatch = useDispatch();

  return destinationList.map((destination, index) => (
    <div
      key={index}
      className="card mb-10"
      style={{ maxWidth: "540px", margin: "10px auto" }}
    >
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{destination.name}</h5>
          <button
            className="btn btn-success form-control m-1"
            onClick={() => dispatch(destinationClicked(destination))}
          >
            Details
          </button>
          {/* <p className="card-text">{destination.description}</p>
          <p className="card-text">
            <small className="text-muted">Country: {destination.country}</small>
          </p> */}
        </div>
      </div>
    </div>
  ));
}

export default DestinationList;
