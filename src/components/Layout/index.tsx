import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import Header from '@components/Layout/Header';
import Sidebar from '@components/Layout/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
   return (
      <Box>
         <section className="app">
            <div className="sidebar">
               <Sidebar />
            </div>
            <div className="main">
               <Header />
               <Outlet />
            </div>
         </section>
      </Box>
   );
};

export default Layout;
