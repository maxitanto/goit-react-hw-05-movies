import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/getMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getMovieReviews(movieId);
        setReviews(resp);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviews.length === 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default Reviews;
