import { MovieDetails } from '@config/types';
import TmdbClient from '@services/tmdb-client';
import { useQuery } from '@tanstack/react-query';

const useMovie = (id: any) => {
   const tmdbClient = new TmdbClient<MovieDetails>(`/movie/${id}`);
   return useQuery({
      queryKey: ['movie'],
      queryFn: () => tmdbClient.getById({ append_to_response: true }),
   });
};

export default useMovie;
