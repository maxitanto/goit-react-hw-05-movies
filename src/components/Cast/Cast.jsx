import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/getMovies';
import { CastInfo, List, ListItem } from './Cast.styled';
import DefaultCastPhoto from '../../images/default_cast_photo.jpg';

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
    <>
      <h2>Cast</h2>
      <List>
        {cast.length === 0 ? (
          <p>We don't have any cast for this movie.</p>
        ) : (
          cast.map(({ id, profile_path, name, character }) => {
            return (
              <ListItem key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : DefaultCastPhoto
                  }
                  alt=""
                />
                <CastInfo>
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </CastInfo>
              </ListItem>
            );
          })
        )}
      </List>
    </>
  );
};

export default Cast;
