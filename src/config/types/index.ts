export interface MovieDetails {
   adult: boolean;
   backdrop_path: string;
   belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
   };
   budget: number;
   genres: [
      {
         id: number;
         name: string;
      },
   ];
   homepage: string;
   id: number;
   imdb_id: string;
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: Date;
   revenue: number;
   runtime: number;
   status: string;
   tagline: string;
   title: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
   production_companies: [
      {
         id: number;
         logo_path: string;
         name: string;
         origin_country: string;
      },
   ];
   credits: {
      cast: [
         {
            adult: boolean;
            gender: number;
            id: number;
            known_for_department: string;
            name: string;
            original_name: string;
            popularity: 0.6;
            profile_path: null;
            credit_id: string;
            department: string;
            job: string;
            character: string;
         },
      ];
   };
   images: {
      backdrops: [
         {
            aspect_ratio: number;
            height: number;
            iso_639_1: string;
            file_path: string;
            vote_average: number;
            vote_count: number;
            width: number;
         },
      ];
   };
}

export interface ActorDetails {
   adult: boolean;
   also_known_as: string[];
   biography: string;
   deathday: null;
   gender: number;
   homepage: null;
   id: number;
   imdb_id: string;
   known_for_department: string;
   name: string;
   place_of_birth: string;
   popularity: number;
   birthday: Date;
   profile_path: string;
}

export interface Genres {
   genres: {
      id: string;
      name: string;
   }[];
}

export interface Movies {
   adult: boolean;
   backdrop_path: string;
   genre_ids: Number[];
   id: number;
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: Date;
   title: string;
   video: boolean;
   vote_average: number;
   vote_count: string;
}
