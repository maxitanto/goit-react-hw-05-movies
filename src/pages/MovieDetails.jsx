import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getDetailsMovies } from 'services/getMovies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getDetailsMovies(`${movieId}`);
        setMovieDetails(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movieId]);

  <p></p>;
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;
  const releaseYear = release_date?.split('-')[0];

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <div>
        {poster_path && (
          <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="" />
        )}
      </div>
      <h2>{`${original_title} (${releaseYear})`}</h2>
      <p>User Score: {(vote_average * 10).toFixed(2)} % </p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres?.map(el => el.name).join(', ')}</p>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
