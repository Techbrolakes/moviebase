import React from 'react';
import error from '@src/assets/animations/error.json';
import Lottie from 'lottie-react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
   const navigate = useNavigate();

   return (
      <Flex justify={'center'} align={'center'} direction={'column'} minH={'100vh'} gap={6}>
         <Lottie
            animationData={error}
            style={{
               width: '25%',
            }}
         />
         <Text fontSize={'17px'}>Ooops, An Error Occured</Text>
         <Button onClick={() => navigate('/')} colorScheme={'green'} fontWeight={'bold'} px={8}>
            Go Back
         </Button>
      </Flex>
   );
};

export default ErrorPage;
