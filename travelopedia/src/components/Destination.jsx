import React from "react";
import { useDeleteDestinationMutation } from "../api/destinationApi";
import { useState } from "react";

function Destination({ destination }) {
  const [deleteDestination, results] = useDeleteDestinationMutation();
  const [isupdating, setIsUpdating] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  return (
    <div
      className="row py-1"
      style={{ borderBottom: "1px solid #333", borderTop: "1px solid #333" }}
    >
      <div className="col-4 offset-2">
        <div className="row">
          <div className="col-6 p-1">
            {isupdating ? (
              <input
                type="text"
                className="form-control"
                placeholder="City"
                value={isupdating ? newCity : destination.city}
                onChange={(e) => setNewCity(e.target.value)}
                disabled={!isupdating}
              />
            ) : (
              <span>{destination.city}</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-6 p-1"></div>
        </div>
        , {destination.country}
      </div>
      <div className="col-1 text-warning">{destination.daysNeeded} days</div>
      <div className="col-2">
        <button
          className="btn form-control btn-danger"
          onClick={() => deleteDestination({ id: destination.id })}
        >
          Delete
        </button>
      </div>
      <div className="col-2">
        <button
          className="btn form-control btn-warning"
          onClick={() => {
            setIsUpdating(!isupdating);
          }}
        >
          {isupdating ? "Cancel" : "Update"}
        </button>
        {isupdating ? <button className="btn btn-primary">Update</button> : ""}
      </div>
    </div>
  );
}

export default Destination;
