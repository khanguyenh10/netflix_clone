

import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";
export default function MovieList({
  title,
  movies,
}: {
  title: string;
  movies: Movie[];
}) {

   
  return (
    <section className="space-y-2 px-4 md:px-12" id={title}>
      <h2 className="text-lg font-semibold text-white md:text-2xl">{title}</h2>
      <div className="flex gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
}
