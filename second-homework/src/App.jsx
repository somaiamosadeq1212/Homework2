import { useState } from 'react';
import './App.css'
import Card from './Components/Card';
import MovieItem from './Components/MovieItem';
import MovieList from './Components/MovieList';
import MovieForm from './Components/MovieForm';
import Summary from './Components/Summary';

function createID() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function App() {

  const [movies, setMovies] = useState([]);

  // state of fillter
  const [filter, setFilter] = useState("All");

  const totalMovies = movies.length;
  const totalWatched = movies.filter(movie => movie.watched).length;
  const totalUnwatched = movies.filter(movie => !movie.watched).length;

  function handleToggleWatched(movieId) {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === movieId
          ? { ...movie, watched: !movie.watched }
          : movie
      )
    );
  }

  function handleAddMovie(data) {
    const newMovie = { 
      id: createID(),
      watched: false,
      ...data };
    setMovies((prev) => [newMovie, ...prev])
  }

  // derived state of fillter
  const filteredMovies = movies.filter(movie => {
    if (filter === "Watched") return movie.watched;
    if (filter === "Unwatched") return !movie.watched;
    return true; // All
  });

  //delete movie
  function handleDeleteMovie(movieId) {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
  }

  return (
    <div className="page">
      <div className="header">
        <h1>🎬 Movie <span>Wachlist</span></h1>
      </div>

     {/* Add Movie Card */}
        <Card title={'Add Movie'}>
          <MovieForm onAddMovie={handleAddMovie}></MovieForm>
        </Card>

    {/* List of movie, filter and summery card */}
      <Card
        title="Filter Movies"
        right={
          <div className="filters">
            <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>All</button>
            <button className={filter === "Watched" ? "active" : ""} onClick={() => setFilter("Watched")}>Watched</button>
            <button className={filter === "Unwatched" ? "active" : ""} onClick={() => setFilter("Unwatched")}>Unwatched</button>
          </div>
        }
        footer={
          <Summary
            totalMovie={totalMovies}
            totalWatched={totalWatched}
            totalUnwatched={totalUnwatched}
          />
        }
      >
        {filteredMovies.length === 0 ? (
          <p className="empty">No movies found. Add one!</p>
        ) : (
          <MovieList
            movies={filteredMovies}
            onToggleWatched={handleToggleWatched}
            onDeleteMovie={handleDeleteMovie}
          />
        )}
      </Card>
    </div>
  )
}

export default App
