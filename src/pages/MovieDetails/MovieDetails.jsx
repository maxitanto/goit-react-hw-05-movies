import { Suspense, useRef } from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getDetailsMovies } from 'services/getMovies';
import {
  FilmInfo,
  Image,
  Info,
  LinkBtn,
  List,
  ListItem,
  Poster,
} from './MovieDetails.styled';

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
      <LinkBtn to={backLinkLocationRef.current}>Go back</LinkBtn>
      <FilmInfo>
        <Poster>
          {poster_path && (
            <Image
              src={`https://image.tmdb.org/t/p/w400${poster_path}`}
              alt=""
              loading="lazy"
              width={300}
              height={450}
            />
          )}
        </Poster>

        <Info>
          <h2>
            {original_title} {releaseYear !== '' && `(${releaseYear})`}
          </h2>
          <p>User Score: {(vote_average * 10).toFixed(2)} % </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres?.map(el => el.name).join(', ')}</p>
        </Info>
      </FilmInfo>

      <h3>Additional information</h3>
      <List>
        <ListItem>
          <LinkBtn to="cast">Cast</LinkBtn>
        </ListItem>
        <ListItem>
          <LinkBtn to="reviews">Reviews</LinkBtn>
        </ListItem>
      </List>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
