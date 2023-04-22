import { Movies } from '@config/types';
import TmdbClient, { ApiResponse } from '@services/tmdb-client';
import { useQuery } from '@tanstack/react-query';

const useRecommendations = (id: any) => {
   const tmdbClient = new TmdbClient<Movies>(`/movie/${id}/recommendations`);

   return useQuery<ApiResponse<Movies>, Error>({
      queryKey: ['movie_recommendations', id],
      queryFn: () => tmdbClient.getByIdWithApiResponse({ page: 1 }),
   });
};

export default useRecommendations;
