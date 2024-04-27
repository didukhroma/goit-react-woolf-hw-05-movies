import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//COMPONENTS
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container';
import Navigation from 'components/Navigation';

const SharedLayout = () => {
  return (
    <Container>
      <AppBar>
        <Navigation />
      </AppBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
