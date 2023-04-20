import { useInfiniteQuery } from '@tanstack/react-query';
import TmdbClient, { ApiResponse } from '../services/tmdb-client';
import { Movies } from '../config/types';

const useRecommendations = (id: number) => {
    const tmdbClient = new TmdbClient<Movies>(`/movie/${id}/recommendations`);

    return useInfiniteQuery<ApiResponse<Movies>, Error>({
        queryKey: ['movie_recommendations', id],
        queryFn: ({ pageParam = 1 }) => tmdbClient.getByIdWithApiResponse({ page: pageParam }),
        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
        },
    });
};

export default useRecommendations;
