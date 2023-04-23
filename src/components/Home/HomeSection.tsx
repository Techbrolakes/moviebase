import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, Center, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import useMovies from '@hooks/useMovies';
import MovieCardContainer from '@components/Blocks/MovieCardContainer';
import MovieCardSkeleton from '@components/Blocks/MovieCardSkeleton';
import ReactStarRatings from 'react-star-ratings';
import FeaturedMovie from './FeaturedMovie';
import { useNavigate } from 'react-router-dom';
import config from '@config/index';
import CustomLoader from '@components/Blocks/CustomLoader';
import { responsiveHeader } from '@config/styles';
import useMovieQueryStore from '@config/store';
import useGenres from '@hooks/useGenres';
import ScrollToTop from '@components/Blocks/ScrollToTop';

const { fallbackSrc, tmdbSrc } = config;

const HomeSection: React.FC = () => {
   const { data, isLoading, fetchNextPage, hasNextPage } = useMovies();
   const { data: genre } = useGenres();
   const SelectedGenre = useMovieQueryStore((s) => s.filters.genre);
   const ShowGenre = genre?.genres?.find((g) => g.id === SelectedGenre);
   const navigate = useNavigate();

   if (isLoading) {
      return <MovieCardSkeleton />;
   }

   return (
      <Stack pb={8} pt={['120px', '120px', '130px']} spacing={8}>
         <FeaturedMovie />
         <ScrollToTop />
         <Box>
            {ShowGenre && (
               <Text px={7} mb={2} sx={responsiveHeader}>
                  {ShowGenre.name} Movies
               </Text>
            )}
            <InfiniteScroll dataLength={data?.pages.length || 0} next={fetchNextPage} hasMore={!!hasNextPage} loader={<CustomLoader />} scrollableTarget="scrollableDiv">
               {data?.pages.map((page, index) => (
                  <Box key={index}>
                     <section>
                        <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing={[16, 12]} padding={['10px', '25px']}>
                           {page?.results?.map(({ poster_path, id, vote_average }) => (
                              <div key={id} onClick={() => navigate(`movie/${id}`)}>
                                 <Stack spacing={4} w={'fit-content'}>
                                    <Image
                                       cursor={'pointer'}
                                       w={['100%', '100%', '100%', '100%']}
                                       h={['550px', '350px', '350px', '400px']}
                                       fallbackSrc={fallbackSrc}
                                       objectFit={['cover', 'contain', 'contain', 'contain']}
                                       src={`${tmdbSrc}${poster_path}`}
                                    />
                                    <Center cursor={'pointer'}>
                                       <ReactStarRatings rating={vote_average / 2} starRatedColor="#FAAF00" numberOfStars={5} starDimension="25px" starSpacing="2px" />
                                    </Center>
                                 </Stack>
                              </div>
                           ))}
                        </SimpleGrid>
                     </section>
                  </Box>
               ))}
            </InfiniteScroll>
         </Box>
      </Stack>
   );
};

export default HomeSection;
