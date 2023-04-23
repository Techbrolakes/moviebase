import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
   const [showButton, setShowButton] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         setShowButton(scrollY > 100);
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <Button onClick={handleClick} position="fixed" bottom="4" right="4" display={showButton ? 'block' : 'none'}>
         Scroll to Top
      </Button>
   );
};

export default ScrollToTopButton;
