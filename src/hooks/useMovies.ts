import useMovieQueryStore from '@config/store';
import { Movies } from '@config/types';
import TmdbClient, { ApiResponse } from '@services/tmdb-client';
import { useInfiniteQuery } from '@tanstack/react-query';

const useMovies = () => {
    const movieQuery = useMovieQueryStore((s) => s.filters);

    let endpoint = '';

    if (movieQuery.searchText) {
        endpoint = `/search/movie`;
    } else if (movieQuery.category) {
        endpoint = `/movie/${movieQuery.category}`;
    } else if (movieQuery.genre) {
        endpoint = `discover/movie`;
    } else if (movieQuery.sortBy) {
        endpoint = `discover/movie`;
    } else {
        endpoint = `/movie/popular`;
    }

    const tmdbClient = new TmdbClient<Movies>(endpoint);

    return useInfiniteQuery<ApiResponse<Movies>, Error>({
        queryKey: ['movies', movieQuery],
        onError: (error) => console.log(error),
        queryFn: ({ pageParam = 1 }) =>
            tmdbClient.getWithApiResponse({
                page: pageParam,
                queryParams: movieQuery.searchText,
                with_genres: movieQuery.genre,
                sort_by: movieQuery.sortBy,
            }),
        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
        },
    });
};

export default useMovies;
