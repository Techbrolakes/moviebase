import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@pages/home';
import MoviePage from '@pages/movie';

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/movie', element: <MoviePage /> },
]);

export default router;
