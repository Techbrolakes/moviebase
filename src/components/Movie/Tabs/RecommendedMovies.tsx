import React, { useEffect } from 'react';
import useRecommendations from '@hooks/useRecommendations';
import MovieCardContainer from '@components/Blocks/MovieCardContainer';
import { Box, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import config from '@config/index';
import Loading from '@components/Blocks/Loading';

const { fallbackSrc, tmdbSrc } = config;

const CustomLoader = () => (
   <Stack px={4} py={4}>
      <Loading />
   </Stack>
);

interface IProps {
   id: any;
}

const RecommendedMovies: React.FC<IProps> = ({ id }) => {
   const { data, isFetching, isLoading } = useRecommendations(id);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [id]);

   if (isFetching || isLoading) {
      <div>
         <CustomLoader />
         <CustomLoader />
         <CustomLoader />
         <CustomLoader />
         <CustomLoader />
         <CustomLoader />
      </div>;
   }

   return (
      <>
         <section>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={12}>
               {data?.results.map(({ poster_path, id }) => (
                  <Link key={id} to={`/movie/${id}`}>
                     <MovieCardContainer>
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
                     </MovieCardContainer>
                  </Link>
               ))}
            </SimpleGrid>
         </section>
      </>
   );
};

export default RecommendedMovies;