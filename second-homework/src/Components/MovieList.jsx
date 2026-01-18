import MovieItem from "./MovieItem";

export default function MovieList({ movies, onToggleWatched, onDeleteMovie}) {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onToggleWatched={onToggleWatched}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
}