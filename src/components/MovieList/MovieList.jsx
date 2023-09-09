const { Link, useLocation } = require('react-router-dom');

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        const { id, original_title } = movie;
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
