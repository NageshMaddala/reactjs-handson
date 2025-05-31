/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const MoviePage = () => {
  const [movieState, setMovieState] = useState({
    MovieList: ["Die Hard", "Harry Potter", "Inception", "Interstellar"],
  });

  function handleAddMovie(newMovie) {
    setMovieState((prevState) => {
      // if you have more than one state variable, you can use the spread operator to copy the previous state
      // and then update the MovieList with the new movie
      return { ...prevState, MovieList: prevState.MovieList.concat(newMovie) };
    });
  }

  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList movieList={movieState.MovieList} />
    </div>
  );
};
export default MoviePage;
