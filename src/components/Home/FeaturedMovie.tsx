import { Box, Stack, Text } from '@chakra-ui/react';
import useMovies from '@hooks/useMovies';
import React from 'react';

const FeaturedMovie: React.FC = () => {
   const { data } = useMovies();

   return (
      <Box
         height={'550px'}
         w={'1200px'}
         borderRadius={'10px'}
         mx={'auto'}
         bgImage={`https://image.tmdb.org/t/p/original/${data?.pages[0]?.results[0]?.backdrop_path}`}
         bgRepeat={'no-repeat'}
         bgSize={'cover'}
         bgPosition={'center'}
         position="relative"
      >
         <Box position="absolute" top="0" left="0" w="100%" h="100%" bg="rgba(0, 0, 0, 0.7)" borderRadius={'10px'} />
         <Stack spacing={4} position={'absolute'} bottom={10} px={4} color={'white'}>
            <Text fontSize={'xl'} fontWeight={'semibold'}>
               {data?.pages[0].results[0].title}
            </Text>
            <Text w={'60%'}>{data?.pages[0].results[0].overview}</Text>
         </Stack>
      </Box>
   );
};

export default FeaturedMovie;
