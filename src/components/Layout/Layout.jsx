import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Link, Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>

      <Wrapper>
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </Wrapper>

      <Footer> &copy; 2023 MaxiTanto</Footer>
    </div>
  );
};

export default Layout;
