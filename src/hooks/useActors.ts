import { useQuery } from '@tanstack/react-query';
import TmdbClient from '../services/tmdb-client';
import { ActorDetails } from '../config/types';

const useActors = (id: number) => {
    const tmdbClient = new TmdbClient<ActorDetails>(`person/${id}`);

    return useQuery({
        queryKey: ['actor_details', id],
        queryFn: () => tmdbClient.getById(),
    });
};

export default useActors;
