import responseMovies from "../mocks/with-results.json";
import withoutResults from "../mocks/without-results.json";

export const useMovies = () => {
    const movies = responseMovies.Search

  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type,
  }));

  return { movies: mappedMovies}
};
