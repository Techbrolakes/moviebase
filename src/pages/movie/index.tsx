import React from 'react';
import { Stack } from '@chakra-ui/react';
import MovieDetails from '@components/Movie/MovieDetails';

const MoviePage: React.FC = () => {
   return (
      <Stack pb={8} pt={'110px'} px={4} spacing={8}>
         <MovieDetails />
      </Stack>
   );
};

export default MoviePage;
