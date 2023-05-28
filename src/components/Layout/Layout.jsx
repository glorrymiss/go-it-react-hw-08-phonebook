import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';
import { Container, Wrap } from './Layout.styled';

const Layout = () => {
  return (
    <Wrap>
      <Navigation />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </Wrap>
  );
};

export default Layout;
