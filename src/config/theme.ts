import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
   initialColorMode: 'dark',
};

const theme = extendTheme({
   config,
   fonts: {
      heading: 'satoshi, sans-serif',
   },
});

export default theme;
