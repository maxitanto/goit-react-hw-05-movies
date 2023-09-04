import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  // const params = useParams();
  // console.log(params)

  const { movieId } = useParams();

  //HTTP запит при монтуванні
  // Берем movieId (Id фильма и делаем запрос по конкретному фільму)
  // записіваем то что нужно в стейт и зендерим
  // useEffect(() => {
  // HTTP request
  // }, []);

  return (
    <>
      <h2>Movie Details</h2>
      <div>Poster</div>
      <h3>Film name: {movieId}</h3>
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
