import { Stack } from '@chakra-ui/react';
import ActorDetails from '@components/Actor/ActorDetails';
import Layout from '@components/Layout';
import React from 'react';

const ActorPage: React.FC = () => {
   return (
      <Layout>
         <Stack pb={8} pt={'110px'} px={4} spacing={8}>
            <ActorDetails />
         </Stack>
      </Layout>
   );
};

export default ActorPage;
