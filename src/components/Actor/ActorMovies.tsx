import React from 'react';
import { Box, Center, Heading, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import MovieCardContainer from '@components/Blocks/MovieCardContainer';
import config from '@config/index';
import ReactStarRatings from 'react-star-ratings';
import { useNavigate } from 'react-router-dom';
import { Movies } from '@config/types';
import { ApiResponse } from '@services/tmdb-client';

const { fallbackSrc, tmdbSrc } = config;

interface IProps {
   actorMovies?: ApiResponse<Movies>;
   name?: string;
}

const ActorMovies: React.FC<IProps> = ({ actorMovies, name }) => {
   const navigate = useNavigate();

   return (
      <Box>
         <Center>
            <Heading mb={[6, 7, 8]} textStyle="h1">
               {name} Movies
            </Heading>
         </Center>
         <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing={12} padding="25px">
            {actorMovies?.results?.map(({ poster_path, id, vote_average }) => (
               <div key={id} onClick={() => navigate(`/movie/${id}`)}>
                  <MovieCardContainer>
                     <Stack spacing={2} boxShadow={'2xl'}>
                        <Image
                           cursor={'pointer'}
                           w={'100%'}
                           h={['500px', '350px', '350px', '400px']}
                           fallbackSrc={fallbackSrc}
                           objectFit={'contain'}
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
      </Box>
   );
};

export default ActorMovies;
