import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, Center, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import useMovies from '@hooks/useMovies';
import MovieCardContainer from '@components/Blocks/MovieCardContainer';
import MovieCardSkeleton from '@components/Blocks/MovieCardSkeleton';
import ReactStarRatings from 'react-star-ratings';
import FeaturedMovie from './FeaturedMovie';
import { useNavigate } from 'react-router-dom';
import config from '@config/index';
import CustomLoader from '@components/Blocks/CustomLoader';

const { fallbackSrc, tmdbSrc } = config;

const HomeSection: React.FC = () => {
   const { data, isLoading, fetchNextPage, hasNextPage } = useMovies();
   const navigate = useNavigate();

   if (isLoading) {
      return <MovieCardSkeleton />;
   }

   return (
      <Stack pb={8} pt={'130px'} spacing={8}>
         <FeaturedMovie />
         <InfiniteScroll dataLength={data?.pages.length || 0} next={fetchNextPage} hasMore={!!hasNextPage} loader={<CustomLoader />} scrollableTarget="scrollableDiv">
            {data?.pages.map((page, index) => (
               <Box key={index}>
                  <section>
                     <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={12} padding="25px">
                        {page?.results?.map(({ poster_path, id, vote_average }) => (
                           <div key={id} onClick={() => navigate(`movie/${id}`)}>
                              <MovieCardContainer>
                                 <Stack spacing={2} boxShadow={'2xl'}>
                                    <Image
                                       cursor={'pointer'}
                                       w={'600px'}
                                       boxShadow={'inner'}
                                       borderRadius={'10px'}
                                       h={'450px'}
                                       fallbackSrc={fallbackSrc}
                                       objectFit={'cover'}
                                       src={`${tmdbSrc}${poster_path}`}
                                    />
                                    <Center>
                                       <ReactStarRatings rating={vote_average / 2} starRatedColor="#FAAF00" numberOfStars={5} starDimension="25px" starSpacing="2px" />
                                    </Center>
                                 </Stack>
                              </MovieCardContainer>
                           </div>
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
