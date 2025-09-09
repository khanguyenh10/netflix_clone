import { fetchMovies } from "@/lib/tmdb";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MovieList from "@/components/MovieList";

export default async function Home() {
  const popular = await fetchMovies("popular");
  const topRated = await fetchMovies("top_rated");
  const nowPlaying = await fetchMovies("now_playing");

  return (
    <main>
      <Header/>
      <HeroSection movie={popular.results[0]} />
      <MovieList title="Popular" movies={popular.results} />
      <MovieList title="Top Rated" movies={topRated.results} />
      <MovieList title="Now Playing" movies={nowPlaying.results} />
    </main>
  );
}
