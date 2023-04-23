import { Avatar, Center, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import MovieCardContainer from '@components/Blocks/MovieCardContainer';
import config from '@config/index';
import { responsiveText } from '@config/styles';
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
         <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 4 }} spacing={8} py={8}>
            {data?.credits.cast.map(({ original_name, profile_path, id, character }) => (
               <Link key={id} to={`/actor/${id}`}>
                  <MovieCardContainer>
                     <Stack spacing={4} bg="#000" h={'fit-content'} w={'fit-content'} pb={4}>
                        <Image width={['500px', '400px']} objectFit={'cover'} fallbackSrc={fallbackSrc} height={['300px', '250px']} src={`${tmdbSrc}${profile_path}`} />
                        <VStack py={2} spacing={2}>
                           <Text sx={responsiveText}>{original_name}</Text>
                           <span>as</span>
                           <Text textAlign={'center'} sx={responsiveText}>
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
