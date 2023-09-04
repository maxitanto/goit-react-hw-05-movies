import { useParams } from 'react-router-dom';

const Cast = () => {
  // const params = useParams();
  // console.log('Cast>>>', params);

  const { movieId } = useParams();

  //HTTP запит при монтуванні
  // Берем movieId (Id фильма и делаем запрос по конкретному фільму)
  // записіваем то что нужно в стейт и рендерим
  // useEffect(() => {
  // HTTP request
  // }, []);

  return (
    <>
      <h2>Cast for {movieId}</h2>
      <div>Actor photo</div>
      <p>Actor Name</p>
      <p>Character</p>
    </>
  );
};

export default Cast;
