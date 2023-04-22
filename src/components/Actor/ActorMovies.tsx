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
}

const ActorMovies: React.FC<IProps> = ({ actorMovies }) => {
   const navigate = useNavigate();

   return (
      <Box>
         <Center>
            <Heading mb={16} textStyle="h1">
               Movies
            </Heading>
         </Center>
         <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={12} padding="25px">
            {actorMovies?.results?.map(({ poster_path, id, vote_average }) => (
               <div key={id} onClick={() => navigate(`/movie/${id}`)}>
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
      </Box>
   );
};

export default ActorMovies;
