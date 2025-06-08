import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Importing useSelector from react-redux to access the Redux store state
// useSelector is a hook that allows you to extract data from the Redux store state
// It takes a function as an argument that receives the entire Redux store state and returns the part of the state you want to access
import {
  increment,
  decrement,
  reset,
  incrementMultiplier,
  decrementMultiplier,
  resetMultiplier,
} from "../../redux/slice/counterSlice"; // Importing actions from the counterSlice

import { useState } from "react";

function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch(); // Using useDispatch to get the dispatch function from the Redux store
  // useDispatch is a hook that returns the dispatch function from the Redux store
  const [multiplier, setMultiplier] = useState(10); // Local state to hold the multiplier value

  return (
    <div
      className="mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-white pb-2 h4">Counter: {count}</div>
      <div className="row">
        <div className="p-4 col-12 col-md-6">
          <h4 className="text-success pb-2">Basic Counter</h4>
          <div className="border p-4">
            <button
              className="btn btn-primary form-control"
              onClick={() => dispatch(increment())}
            >
              Add
            </button>{" "}
            &nbsp;
            <button
              className="btn btn-danger form-control"
              onClick={() => dispatch(decrement())}
            >
              Remove
            </button>{" "}
            &nbsp;
            <button
              className="btn btn-warning form-control"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="p-4 col-12 col-md-6">
          <h4 className="text-success pb-2">Multiplier Counter</h4>
          <div className="border p-4">
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Enter a number to multiply"
              value={multiplier}
              onChange={(e) => setMultiplier(e.target.value)}
            />
            <button
              className="btn btn-primary form-control"
              onClick={() => dispatch(incrementMultiplier({ multiplier }))}
            >
              Add
            </button>{" "}
            &nbsp;
            <button
              className="btn btn-danger form-control"
              onClick={() => dispatch(decrementMultiplier({ multiplier }))}
            >
              Remove
            </button>{" "}
            &nbsp;
            <button
              className="btn btn-warning form-control"
              onClick={() => dispatch(resetMultiplier({ multiplier }))}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
