import { Box, Grid, GridItem, Show, useColorModeValue } from '@chakra-ui/react';
import Header from '@components/Layout/Header';
import Sidebar from '@components/Layout/Sidebar';
import React from 'react';

interface IProps {
   children: React.ReactNode;
}
const Layout: React.FC<IProps> = ({ children }) => {
   const bg = useColorModeValue(' #F5F5F5', '#121212');

   return (
      <Box bgColor={bg}>
         <Grid templateAreas={{ base: `"main"`, lg: `"aside main"` }} templateColumns={{ base: '1fr', lg: '250px 1fr' }} height="100%">
            <Show above="lg">
               <GridItem overflowY="auto" h="100vh">
                  <Sidebar />
               </GridItem>
            </Show>
            <GridItem>
               <Box overflowY="auto" h="calc(100vh - 2px)" id="scrollableDiv">
                  <Header />

                  <div>{children}</div>
               </Box>
            </GridItem>
         </Grid>
      </Box>
   );
};

export default Layout;
