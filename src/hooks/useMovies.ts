import { useQuery } from '@tanstack/react-query';
import TmdbClient from '../services/tmdb-client';

const tmdbClient = new TmdbClient('/movie/popular');

const useMovies = (page?: number) => {
    return useQuery({
        queryKey: ['movies', page],
        queryFn: () => tmdbClient.getAll(),
    });
};

export default useMovies;
