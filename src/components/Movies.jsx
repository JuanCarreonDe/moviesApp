const ListOfMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
          <span>{movie.type}</span>
        </li>
      ))}
    </ul>
  );
};

const NoMoviesResult = () => {
  return <h3>No hay resultados</h3>;
};

const Movies = ({ movies }) => {
  const hasMovies = movies.length > 0

  return hasMovies 
    ? <ListOfMovies movies={movies} />
    : <NoMoviesResult/>
};

export default Movies;
