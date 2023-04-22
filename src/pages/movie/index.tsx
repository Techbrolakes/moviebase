import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useMovie from '@hooks/useMovie';

const MoviePage: React.FC = () => {
   const { id } = useParams();
   const { data, isLoading } = useMovie(id);

   return (
      <Stack pb={8} pt={'130px'} px={4} spacing={8}>
         <h1>{data?.original_title}</h1>
         <h2>{data?.overview}</h2>
      </Stack>
   );
};

export default MoviePage;
