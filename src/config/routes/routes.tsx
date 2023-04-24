import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@pages/home';
import MoviePage from '@pages/movie';
import ActorPage from '@pages/actor';
import ErrorPage from '@pages/ErrorPage';

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
   },
   {
      path: '/movie/:id',
      errorElement: <ErrorPage />,
      element: <MoviePage />,
   },
   {
      path: '/actor/:id',
      errorElement: <ErrorPage />,
      element: <ActorPage />,
   },
]);

export default router;
