import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { featuresBoxStyles, overlayStyles, responsiveHeader, responsiveText } from '@config/styles';
import { useNavigate } from 'react-router-dom';
import useMovies from '@hooks/useMovies';

const FeaturedMovie: React.FC = () => {
   const { data } = useMovies();
   const navigate = useNavigate();

   if (data?.pages[0]?.results[0] === undefined) return null;
   return (
      <Box
         onClick={() => navigate(`movie/${data?.pages[0]?.results[0]?.id}`)}
         bgImage={`https://image.tmdb.org/t/p/original/${data?.pages[0]?.results[0]?.backdrop_path}`}
         sx={featuresBoxStyles}
      >
         <Box sx={overlayStyles} />
         <Stack spacing={4} sx={{ position: 'absolute', bottom: 10, px: 4, color: 'white' }}>
            <Text sx={responsiveHeader}>{data?.pages[0]?.results[0]?.title}</Text>
            <Text w={['100%', '60%']} sx={responsiveText}>
               {data?.pages[0]?.results[0]?.overview}
            </Text>
         </Stack>
      </Box>
   );
};

export default FeaturedMovie;
