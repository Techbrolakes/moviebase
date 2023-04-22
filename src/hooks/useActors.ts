import { ActorDetails } from '@config/types';
import TmdbClient from '@services/tmdb-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const useActors = (id: any) => {
   const tmdbClient = new TmdbClient<ActorDetails>(`person/${id}`);

   return useQuery({
      queryKey: ['actor_details', id],
      queryFn: () => tmdbClient.getById(),
      staleTime: ms('24h'),
   });
};

export default useActors;
