import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  //HTTP запит при монтуванні
  // useEffect(() => {
  // HTTP request
  // }, []);

  //стейт
  // рендерим коллекцию фильмов

  const movies = ['Movie-1', 'Movie-2', 'Movie-3', 'Movie-4'];

  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movies.indexOf(movie)}>
              <Link to={`${movie}`}>{movie}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
