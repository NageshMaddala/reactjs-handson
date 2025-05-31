const MovieList = (props) => {
  return (
    <div className="text-white">
      {props.movieList.map((movie, index) => (
        <div key={index} className="row">
          <div className="col-10 text-center py-1 h5">
            {movie}, {index}
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieList;
