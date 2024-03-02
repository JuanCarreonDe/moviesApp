const ListOfMovies = ({ movies }) => {
  return (
    <ul className="w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] gap-8">
      {movies?.map((movie) => (
        <li key={movie.id} className="flex flex-col gap-2 bg-black/30 p-4 shadow rounded-lg text-center">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} className="rounded-lg"/>
        </li>
      ))}
    </ul>
  );
};

const NoMoviesResult = () => {
  return <h3>No hay resultados</h3>;
};

const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return hasMovies 
    ? <ListOfMovies movies={movies} />
    : <NoMoviesResult/>
};

export default Movies;
