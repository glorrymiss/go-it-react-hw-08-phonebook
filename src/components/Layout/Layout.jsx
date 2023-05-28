import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';
import { Container, Wrap } from './Layout.styled';
import { selectIsRefreshing } from 'redux/user/user-selectors';
import { useSelector } from 'react-redux';

const Layout = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <Wrap>
      <Navigation />
      {isRefreshing ? (
        <>
          <Loader />
        </>
      ) : (
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      )}
      <Footer />
    </Wrap>
  );
};

export default Layout;
