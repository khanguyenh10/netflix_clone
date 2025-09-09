import { Movie } from "@/types/movie";
import MovieList from "./MovieList";

export default function RelatedMovies({ movies }: { movies: Movie[] }) {
  if (!movies?.length) return null;
  return <MovieList title="Related" movies={movies} />;
}
