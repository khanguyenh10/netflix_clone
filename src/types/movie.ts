export type Movie = {
  id: number;
  title?: string;
  name?: string; // Some endpoints return name instead of title
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date?: string;
  first_air_date?: string; // for TV
  genre_ids?: number[];
};

export type MovieDetail = Movie & {
  genres?: { id: number; name: string }[];
  runtime?: number;
  homepage?: string | null;
  videos?: {
    results: Array<{ key: string; name: string; site: string; type: string }>;
  };
  credits?: {
    cast: Array<{
      id: number;
      name: string;
      character: string;
      profile_path: string | null;
    }>;
    crew: Array<{ id: number; name: string; job: string }>;
  };
  similar?: { results: Movie[] };
};
