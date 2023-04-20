import { useQuery } from '@tanstack/react-query';
import TmdbClient from '../services/tmdb-client';
import { Genres } from '../config/types';

const tmdbClient = new TmdbClient<Genres>('genre/movie/list');

const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: () => tmdbClient.getWithoutApiResponse(),
    });

export default useGenres;
