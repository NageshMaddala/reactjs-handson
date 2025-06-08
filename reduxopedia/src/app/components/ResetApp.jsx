import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/slice/counterSlice";
import { resetDestination } from "../../redux/slice/destinationSlice";

function ResetApp() {
  const dispatch = useDispatch();

  const resetCounterAndDestination = () => {
    dispatch(resetDestination());
    // dispatch(reset());
  };

  return (
    <div className="text-center">
      <button
        className="btn btn-warning"
        onClick={() => resetCounterAndDestination()}
      >
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
