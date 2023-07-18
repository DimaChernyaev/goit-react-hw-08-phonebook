import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/navigation/Navigation';
import { Container, Header } from './SharedLoyout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>

      <main>
        <Container>
          <Suspense fallback={'Loader...'}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
