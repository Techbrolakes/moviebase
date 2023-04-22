import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@pages/home';
import MoviePage from '@pages/movie';
import ActorPage from '@pages/actor';

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />,
   },
   {
      path: '/movie/:id',
      element: <MoviePage />,
   },
   {
      path: '/actor/:id',
      element: <ActorPage />,
   },
]);

export default router;
