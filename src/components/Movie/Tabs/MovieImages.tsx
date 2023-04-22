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

const MovieImages: React.FC<IProps> = ({ data }) => {
   return (
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={12}>
         {data?.images?.backdrops.map(({ file_path }) => (
            <Image w={'400px'} h={'300px'} fallbackSrc={fallbackSrc} objectFit={'cover'} src={`${tmdbSrc}${file_path}`} />
         ))}
      </SimpleGrid>
   );
};

export default MovieImages;
