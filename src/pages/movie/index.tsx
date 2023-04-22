import React from 'react';
import { Stack } from '@chakra-ui/react';
import MovieDetails from '@components/Movie/MovieDetails';
import Layout from '@components/Layout';

const MoviePage: React.FC = () => {
   return (
      <Layout>
         <Stack pb={8} pt={'110px'} px={4} spacing={8}>
            <MovieDetails />
         </Stack>
      </Layout>
   );
};

export default MoviePage;
