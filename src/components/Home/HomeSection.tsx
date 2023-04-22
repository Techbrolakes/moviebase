import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import useMovies from '@hooks/useMovies';
import MovieCardContainer from '@components/Blocks/MovieCardContainer';
import MovieCardSkeleton from '@components/Blocks/MovieCardSkeleton';
import Loading from '@components/Blocks/Loading';
import FeaturedMovie from './FeaturedMovie';

const CustomLoader = () => (
   <Stack px={4} py={4}>
      <Loading />
   </Stack>
);

const HomeSection: React.FC = () => {
   const { data, isLoading, fetchNextPage, hasNextPage } = useMovies();
   const skeletons = [1, 2, 3, 4, 5, 6];

   if (isLoading) {
      return (
         <Stack spacing={4} px={4} py={20}>
            <Loading />
            <Loading />
            <Loading />
         </Stack>
      );
   }

   return (
      <Stack py={'130px'} spacing={8}>
         <FeaturedMovie />
         <InfiniteScroll dataLength={data?.pages.length || 0} next={fetchNextPage} hasMore={!!hasNextPage} loader={<CustomLoader />} scrollableTarget="scrollableDiv">
            {data?.pages.map((page, index) => (
               <Box key={index}>
                  <section>
                     <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={20} padding="10px">
                        {isLoading &&
                           skeletons.map((skeleton) => (
                              <MovieCardContainer key={skeleton}>
                                 <MovieCardSkeleton />
                              </MovieCardContainer>
                           ))}
                        {page?.results.map(({ poster_path, id }) => (
                           <MovieCardContainer key={id}>
                              <Image
                                 w={'600px'}
                                 shadow={'xl'}
                                 borderRadius={'10px'}
                                 h={'450px'}
                                 fallbackSrc="https://competent-fermi-0457c4.netlify.app/static/media/no_image.22d2aa4d.jpg"
                                 objectFit={'cover'}
                                 src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://www.fillmurray.com/200/300'}
                              />
                           </MovieCardContainer>
                        ))}
                     </SimpleGrid>
                  </section>
               </Box>
            ))}
         </InfiniteScroll>
      </Stack>
   );
};

export default HomeSection;
