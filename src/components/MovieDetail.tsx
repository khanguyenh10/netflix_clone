import Image from "next/image";

type Props = {
  movie: any;
};

export default function MovieDetail({ movie }: Props) {
  return (
    <section className="p-6 grid md:grid-cols-3 gap-6">
      <div className="relative w-full h-[400px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-[var(--color-foreground)]">{movie.overview}</p>
        <p>
          <span className="font-semibold">Release:</span> {movie.release_date}
        </p>
        <p>
          <span className="font-semibold">Rating:</span> {movie.vote_average}
        </p>
        <div>
          <span className="font-semibold">Genres:</span>{" "}
          {movie.genres?.map((g: any) => g.name).join(", ")}
        </div>
      </div>
    </section>
  );
}
