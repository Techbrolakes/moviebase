import { Avatar, Center, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import MovieCardContainer from '@components/Blocks/MovieCardContainer';
import config from '@config/index';
import { MovieDetails } from '@config/types';
import React from 'react';
import { Link } from 'react-router-dom';

const { fallbackSrc, tmdbSrc } = config;

interface IProps {
   data: MovieDetails;
}

const CastsTab: React.FC<IProps> = ({ data }) => {
   return (
      <div>
         <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} spacing={12} py={8}>
            {data?.credits.cast.map(({ original_name, profile_path, id, character }) => (
               <Link key={id} to={`/movie/${id}`}>
                  <MovieCardContainer>
                     <Stack spacing={4} boxShadow={'lg'} bg="#000" h={'350px'} w={'fit-content'}>
                        <Image width={'200px'} objectFit={'cover'} fallbackSrc={fallbackSrc} height={'200px'} src={`${tmdbSrc}${profile_path}`} />
                        <VStack py={2} spacing={2}>
                           <Text textStyle="p">{original_name}</Text>
                           <span>as</span>
                           <Text textAlign={'center'} textStyle="p">
                              {character}
                           </Text>
                        </VStack>
                     </Stack>
                  </MovieCardContainer>
               </Link>
            ))}
         </SimpleGrid>
      </div>
   );
};

export default CastsTab;
