import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

const IMG = process.env.TMDB_IMG_W500!;

export default function MovieCard({ movie }: { movie: Movie }) {
  const title = movie.title || movie.name || "Untitled";
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group w-36 flex-shrink-0 sm:w-44 md:w-52"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-neutral-800">
        {movie.poster_path && (
          <Image
            src={`${IMG}${movie.poster_path}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 40vw, (max-width: 1200px) 20vw, 15vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="mt-2 line-clamp-2 text-sm text-[var(--color-foreground)]">{title}</div>
      <div className="text-xs text-[var(--color-foreground)]">
        ★ {movie.vote_average?.toFixed(1)}
      </div>
    </Link>
  );
}
