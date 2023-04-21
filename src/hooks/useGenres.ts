import { Genres } from '@config/types';
import TmdbClient from '@services/tmdb-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const tmdbClient = new TmdbClient<Genres>('genre/movie/list');

const useGenres = () =>
   useQuery({
      queryKey: ['genres'],
      queryFn: () => tmdbClient.getWithoutApiResponse(),
      staleTime: ms('24h'),
   });

export default useGenres;
