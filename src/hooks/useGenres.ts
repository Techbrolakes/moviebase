import { Genres } from '@config/types';
import TmdbClient from '@services/tmdb-client';
import { useQuery } from '@tanstack/react-query';

const tmdbClient = new TmdbClient<Genres>('genre/movie/list');

const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: () => tmdbClient.getWithoutApiResponse(),
    });

export default useGenres;
