import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//COMPONENTS
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container';
import Navigation from 'components/Navigation';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <AppBar>
        <Container>
          <Navigation />
        </Container>
      </AppBar>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default SharedLayout;
