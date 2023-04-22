import { Movies } from '@config/types';
import TmdbClient from '@services/tmdb-client';
import { useQuery } from '@tanstack/react-query';

const useActorMovies = (id: any) => {
   const tmdbClient = new TmdbClient<Movies>(`/discover/movie`);

   return useQuery({
      queryKey: ['actor_details', id],
      queryFn: () => tmdbClient.getWithApiResponse({ with_cast: id }),
   });
};

export default useActorMovies;
