import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/getMovies';
import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setTrendingMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
