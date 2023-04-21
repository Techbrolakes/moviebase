const categories = [
   { label: 'Popular', value: 'popular' },
   { label: 'Top Rated', value: 'top_rated' },
   { label: 'Upcoming', value: 'upcoming' },
];

const BtnStyles = {
   whiteSpace: 'normal',
   textAlign: 'left',
   textDecoration: 'none',
   '&:hover': {
      textDecoration: 'none',
   },
   fontSize: 'md',
};

const sidebarOuterBoxStyles = {
   direction: 'column',
   position: 'fixed',
   px: '5',
};

const innerBoxStyles = {
   alignItems: 'center',
   boxSize: 'full',
   color: 'white',
   display: 'flex',
   fontSize: '20px',
   fontWeight: 'bold',
   justifyContent: 'center',
   textAlign: 'center',
   textShadow: '0 0 20px black',
};

const SCREEN_TEXTS = {
   categories,
   BtnStyles,
   sidebarOuterBoxStyles,
};

export default SCREEN_TEXTS;
