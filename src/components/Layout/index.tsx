import { Box, Grid, GridItem } from '@chakra-ui/react';
import Header from '@components/Layout/Header';
import Sidebar from '@components/Layout/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
   return (
      <Box height="100vh">
         <Grid templateAreas={{ base: `"main"`, lg: `"aside main"` }} templateColumns={{ base: '1fr', lg: '250px 1fr' }} height="100%">
            <GridItem overflowY="auto" h="100vh">
               <Sidebar />
            </GridItem>
            <GridItem>
               <Box overflowY="auto" h="calc(100vh - 2px)" id="scrollableDiv">
                  <Header />
                  <Outlet />
               </Box>
            </GridItem>
         </Grid>
      </Box>
   );
};

export default Layout;
