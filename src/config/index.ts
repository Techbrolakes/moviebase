const sortOrders = [
   { value: 'popularity.asc', label: 'Popularity (Low to High)' },
   { value: 'popularity.desc', label: 'Popularity (High to Low)' },
   { value: 'release_date.asc', label: 'Release Date (Old to New)' },
   { value: 'release_date.desc', label: 'Release Date (New to Old)' },
   { value: 'revenue.asc', label: 'Revenue (Low to High)' },
   { value: 'revenue.desc', label: 'Revenue (High to Low)' },
   { value: 'vote_average.asc', label: 'Rating (Low to High)' },
   { value: 'vote_average.desc', label: 'Rating (High to Low)' },
];

const config = {
   sortOrders,
};

export default config;
