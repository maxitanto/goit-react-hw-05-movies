import PropTypes from 'prop-types';
import { List, ListItem, ListItemLink } from './MovieList.styled';

const { useLocation } = require('react-router-dom');

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => {
        const { id, original_title } = movie;
        return (
          <ListItem key={id}>
            <ListItemLink to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </ListItemLink>
          </ListItem>
        );
      })}
    </List>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
