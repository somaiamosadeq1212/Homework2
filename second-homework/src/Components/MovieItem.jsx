export default function MovieItem({ movie, onToggleWatched, onDeleteMovie }) {
  return (
    <li className="item">
      <div className="itemTitle">{movie.title}</div>

      <div className="itemMeta">
        {movie.category}
      </div>

      <div className="itemStatus">
        {" "}
        <strong>
          {movie.watched ? "Watched ✅" : "Unwatched ❌"}
        </strong>
      </div>

      <div className="buttons">
        <button onClick={() => onToggleWatched(movie.id)}>
          {movie.watched ? "Mark Unwatched" : "Mark Watched"}
        </button>

        <button onClick={() => onDeleteMovie(movie.id)} className="danger">
          Delete
        </button>
      </div>
    </li>
  );
}