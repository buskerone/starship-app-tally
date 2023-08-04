import { Spinner } from '@chakra-ui/react';
import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainLayout = lazy(() => import('@/layouts/MainLayout'));
const StarShipList = lazy(() => import('@/pages/StarShipList'));
const Favorites = lazy(() => import('@/pages/Favorites'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<StarShipList />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
