import MovieList from 'components/MovieList/MovieList';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/getMovies';

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('query') ?? '';

  const updateQueryString = evt => {
    const searchFilmName = evt.target.value;
    const nextParams = searchFilmName !== '' ? { query: searchFilmName } : {};
    setSearchParams(nextParams);
  };

  const searchMovie = () => {
    const fetchData = async () => {
      try {
        const resp = await getSearchMovie(searchParams);
        setFilms(resp);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  return (
    <div>
      <h2>Movies Page</h2>
      <input type="text" value={filmName} onChange={updateQueryString} />
      <button onClick={searchMovie}>Search movie</button>
      {films.length > 0 && <MovieList movies={films} />}
    </div>
  );
};

export default MoviesPage;
