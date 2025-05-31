import { useState } from "react";
/* eslint-disable no-unused-vars */

const AddMovie = (props) => {
  // controlled component in local state
  // this is similar to 2 way data binding in Angular
  const [name, setName] = useState("");

  function submitAddMovieForm(e, props) {
    // prevent default form submission
    e.preventDefault();
    props.handleAddMovie(name);
    setName(""); // clear the input field after submission
  }

  return (
    // e is the event object
    // e contains information about the event that occurred    
    <form onSubmit={(e) => submitAddMovieForm(e, props)}>
      <div className="row text-white">
        <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
        <div className="col-8 offset-1">
          <input
            type="text"
            className="form-control"
            placeholder="Movie Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success form-control">Add</button>
        </div>
        <hr className="mt-3" />
      </div>
    </form>
  );
};
export default AddMovie;
