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
import Loading from '@components/Blocks/Loading';
import NoDataLoader from '@components/Blocks/NoDataLoader';

const { fallbackSrc, tmdbSrc, categories, sortOrders } = config;

const HomeSection: React.FC = () => {
   const { data, isLoading, fetchNextPage, hasNextPage } = useMovies();
   const { data: genre } = useGenres();
   const SelectedGenre = useMovieQueryStore((s) => s.filters.genre);
   const SelectedCategory = useMovieQueryStore((s) => s.filters.category);
   const SelectedSortBy = useMovieQueryStore((s) => s.filters.sortBy);
   const ShowGenre = genre?.genres?.find((g) => g.id === SelectedGenre);
   const ShowCategory = categories?.find((g) => g.value === SelectedCategory);
   const ShowSortBy = sortOrders?.find((g) => g.value === SelectedSortBy);
   const navigate = useNavigate();

   const checkForEmptyResults = (data: any) => {
      return data?.pages?.some((movie: any) => movie?.results?.length === 0);
   };

   if (isLoading) {
      return <MovieCardSkeleton />;
   }

   return (
      <Stack pb={8} pt={['120px', '120px', '130px']} spacing={8}>
         {checkForEmptyResults(data) && <NoDataLoader />}
         <FeaturedMovie />
         <Box>
            {ShowGenre && (
               <Text px={7} mb={6} sx={responsiveHeader} fontFamily={'Cabin'}>
                  {ShowGenre.name} Movies
               </Text>
            )}
            {ShowCategory && (
               <Text px={7} mb={6} sx={responsiveHeader} fontFamily={'Cabin'}>
                  {ShowCategory.label} Movies
               </Text>
            )}
            {ShowSortBy && (
               <Text textAlign={'right'} px={7} mb={6} fontSize={'2xl'} fontFamily={'Cabin'}>
                  Sorted By - {ShowSortBy.label} Movies
               </Text>
            )}
            <InfiniteScroll dataLength={data?.pages?.length || 0} next={fetchNextPage} hasMore={!!hasNextPage} loader={<CustomLoader />} scrollableTarget="scrollableDiv">
               {data?.pages?.map((page, index) => (
                  <Box key={index}>
                     <section>
                        <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing={[16, 12]} padding={['10px', '25px']}>
                           {page?.results?.map(({ poster_path, id, vote_average }) => (
                              <div key={id} onClick={() => navigate(`movie/${id}`)}>
                                 {page?.results?.length === 0 && <NoDataLoader />}
                                 <MovieCardContainer>
                                    <Stack spacing={4} w={'fit-content'}>
                                       <Image
                                          cursor={'pointer'}
                                          w={'100%'}
                                          h={['500px', '350px', '350px', '400px']}
                                          fallbackSrc={fallbackSrc}
                                          objectFit={'contain'}
                                          src={`${tmdbSrc}${poster_path}`}
                                       />
                                       <Center cursor={'pointer'}>
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
         </Box>
      </Stack>
   );
};

export default HomeSection;
