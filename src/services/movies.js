export const searchMovies = async ({ query }) => {
  if (query === "") return;

  const API_KEY = "8fc96862";

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const json = await res.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type,
    }));
  } catch (err) {
    throw new Error("Error al buscar las peliculas");
  }
};
