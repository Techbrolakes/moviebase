import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
   initialColorMode: 'dark',
};

const theme = extendTheme({
   config,
   fonts: {
      heading: 'satoshi, sans-serif',
   },
   textStyles: {
      h1: {
         fontSize: ['20px', '24px', '28px', '30px'],
         fontWeight: 'bold',
         letterSpacing: '0.2px',
         fontSmooth: 'always',
      },
      p: {
         fontSize: ['10px', '12px', '14px', '15px'],
         lineHeight: '1.75',
         letterSpacing: '0.2px',
      },
   },
});

export default theme;
