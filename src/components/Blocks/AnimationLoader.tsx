import React from 'react';
import film from '@src/assets/animations/film.json';
import Lottie from 'lottie-react';
import { Flex, Text } from '@chakra-ui/react';

const AnimationLoader: React.FC = () => {
   return (
      <Flex justify={'center'} align={'center'} direction={'column'} minH={'30vh'} gap={2}>
         <Lottie
            animationData={film}
            style={{
               width: '25%',
            }}
         />
         <Text fontSize={'17px'}>Made By Lekan 😊 </Text>
      </Flex>
   );
};

export default AnimationLoader;
