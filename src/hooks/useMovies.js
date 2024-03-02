import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

export const useMovies = ({ query, sort }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const previousSearch = useRef(query);

  const getMovies = useCallback(async ({ query }) => {
    if (query === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = query;
      console.log(query, previousSearch.current);
      const newMovies = await searchMovies({ query });
      setMovies(newMovies);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading };
};
