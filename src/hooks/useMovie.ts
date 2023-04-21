import { Genres } from '@config/types';
import TmdbClient from '@services/tmdb-client';
import { useQuery } from '@tanstack/react-query';

const useMovie = (id: number) => {
    const tmdbClient = new TmdbClient<Genres>(`/movie/${id}`);
    return useQuery({
        queryKey: ['movie'],
        queryFn: () => tmdbClient.getById({ append_to_response: true }),
    });
};

export default useMovie;
