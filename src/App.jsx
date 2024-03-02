import Movies from "./components/Movies";
import {useMovies} from "./hooks/useMovies"

function App() {
const {movies: mappedMovies} = useMovies()

  // const movies = responseMovies.Search;
  return (
    <main className="w-full min-h-screen flex flex-col gap-4 p-4">
      <header className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Buscador de peliculas</h1>
        <form className="flex gap-4">
          <input
            type="text"
            placeholder="La la land"
            className="rounded-md px-4"
          />
          <button>Search</button>
        </form>
      </header>

      <section className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">Peliculas</h2>
        <Movies movies={mappedMovies}/>
      </section>
    </main>
  );
}

export default App;
