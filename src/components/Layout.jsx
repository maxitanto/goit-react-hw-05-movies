import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <br />
        Footer by MaxiTanto
      </footer>
    </>
  );
};

export default Layout;
