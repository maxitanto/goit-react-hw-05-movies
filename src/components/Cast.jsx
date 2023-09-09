import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/getMovies';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getMovieCast(movieId);
        setCast(resp);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <ul>
      {cast.length !== 0 && (
        <div>
          <h2>Cast</h2>
          {cast.map(el => {
            return (
              <li key={el.id}>
                {el.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                    alt=""
                  />
                )}
                <p>{el.name}</p>
                <p>Character: {el.character}</p>
              </li>
            );
          })}
        </div>
      )}
    </ul>
  );
};

export default Cast;
