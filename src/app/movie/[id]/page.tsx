import { fetchMovieDetail } from "@/lib/tmdb";
import MovieList from "@/components/MovieList";
import MovieDetail from "@/components/MovieDetail";
import TrailerSection from "@/components/TrailerSection";
import RelatedMovies from "@/components/RelatedMovies";
import Header from "@/components/Header";

type Props = { params: { id: string } };

export default async function MoviePage({ params }: Props) {
  const movie = await fetchMovieDetail(params.id);

  return (
    <main>
      <Header navHidden={true}/>
      <MovieDetail movie={movie} />
      <TrailerSection detail={movie} />
      <RelatedMovies movies={movie.similar.results} />
    </main>
  );
}
