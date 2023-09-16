import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovie } from 'services/getMovies';
import MovieList from 'components/MovieList/MovieList';
import { Form } from './MoviesPage.styled';

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (filmName === '') return;
    const fetchData = async () => {
      try {
        const resp = await getSearchMovie(filmName);
        if (resp.length === 0)
          toast.warning(
            "Sorry, but we didn't find your film. Try something different."
          );
        setFilms(resp);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [filmName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchForm = evt.currentTarget;
    const filmNameValue = searchForm.elements.filmName.value;
    if (filmNameValue === '') {
      toast.info('Please enter something');
      return;
    }
    const nextParams = filmNameValue !== '' ? { query: filmNameValue } : {};
    setSearchParams(nextParams);
    searchForm.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="filmName" placeholder="Search movie" />
        <button type="submit">Search movie</button>
      </Form>
      <div>{films.length > 0 && <MovieList movies={films} />}</div>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default MoviesPage;
