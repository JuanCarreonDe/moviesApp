import { useCallback, useState } from "react";
import Movies from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const { query, error, updateQuery } = useSearch();
  const { movies, getMovies, loading } = useMovies({ query, sort });

  const debouncedGetMovies = useCallback(
    debounce((query) => {
      console.log("query", query);
      getMovies({ query });
    }, 500),
    [getMovies]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ query });
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    updateQuery(newQuery);
    debouncedGetMovies(newQuery);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <section className="w-full max-w-[800px] min-h-screen flex flex-col items-center gap-8 p-4">
      <header className="w-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Buscador de peliculas</h1>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-4 justify-center items-center">
            <input
              onChange={handleChange}
              type="text"
              value={query}
              placeholder="La la land, Nocturnal Animals, Memento"
              name="query"
              className="rounded-md px-4 py-2"
            />
            <button>Search</button>
          </div>
          <div className="flex gap-2 justify-end">
            <input
              type="checkbox"
              name="sort"
              onChange={handleSort}
              checked={sort}
            />
            <label htmlFor="sort">Orden alfabético</label>
          </div>
        </form>
        {error && <span className="text-red-600">{error}</span>}
      </header>

      <main className="flex flex-col items-center w-full gap-4">
        <Movies movies={movies} />
        {loading && <span>Cargando...</span>}
      </main>
    </section>
  );
}

export default App;
