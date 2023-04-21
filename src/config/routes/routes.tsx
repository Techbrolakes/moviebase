import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@pages/home';
import MoviePage from '@pages/movie';
import Layout from '@components/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'movie/:id', element: <MoviePage /> },
        ],
    },
]);

export default router;
