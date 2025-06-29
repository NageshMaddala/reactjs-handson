import React from "react";
import { useState } from "react";
import { useAddDestinationMutation } from "../api/destinationApi";

function AddDestination() {
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const [addDestinationNagesh, results] = useAddDestinationMutation();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    addDestinationNagesh({
      id: Math.random() * 100,
      city: newCity,
      country: newCountry,
      daysNeeded: parseInt(Math.random() * 10) + 1, // Random daysNeeded between 1 and 10
    })
      .unwrap()
      .then(() => {
        console.log("Destination added successfully");
      })
      .catch((error) => {
        console.error("Failed to add destination:", error);
      });

    setNewCity("");
    setNewCountry("");
  };

  return (
    <div className="row col-8 offset-2">
      <form onSubmit={handleSubmit}>
        <div className="row col-8 offset-2">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
          </div>
          <div className="col-5 p1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter country"
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
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
