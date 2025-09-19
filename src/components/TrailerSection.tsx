import { MovieDetail } from "@/types/movie";

export default function TrailerSection({ detail }: { detail: MovieDetail }) {
  const trailer = detail.videos?.results.find(
    (v) => v.site === "YouTube" && (v.type === "Trailer" || v.type === "Teaser")
  );
  if (!trailer) return null;
  console.log(detail.videos?.results);
  return (
    <section className="mt-6 px-4 md:px-12">
      <h3 className="mb-3 text-lg font-semibold text-[var(--color-foreground)] md:text-xl">
        Trailer
      </h3>
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
