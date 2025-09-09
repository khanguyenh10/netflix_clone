import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

const IMG = process.env.TMDB_IMG_ORIGINAL!;

export default function HeroSection({ movie }: { movie: Movie }) {
  const title = movie.title || movie.name || "Untitled";
  return (
    <section className="relative h-[60vh] w-full md:h-[70vh] lg:h-[80vh]">
      {movie.backdrop_path && (
        <Image
          src={`${IMG}${movie.backdrop_path}`}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute bottom-8 left-4 max-w-2xl space-y-3 md:left-12">
        <h1 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="line-clamp-3 text-white/80 md:text-lg">
          {movie.overview}
        </p>
        <Link
          href={`/movie/${movie.id}`}
          className="inline-block rounded-xl bg-white px-4 py-2 font-medium text-black hover:bg-white/90"
        >
          Watch details
        </Link>
      </div>
    </section>
  );
}
