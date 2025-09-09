const BASE_URL = process.env.TMDB_BASE_URL!;
const API_KEY = process.env.TMDB_API_KEY!;

export type CategoryKey = "popular" | "now_playing" | "top_rated" | "upcoming";

export async function fetchMovies(category: CategoryKey, page = 1) {
  const res = await fetch(
    `${BASE_URL}/movie/${category}?language=en-US&page=${page}`,
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
      // Cache each row for short period; you can tune for SSG/ISR
      next: { revalidate: 60 * 10 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json(); // { page, results, total_pages, total_results }
}

export async function fetchMovieDetail(id: string | number) {
  const url = new URL(`${BASE_URL}/movie/${id}`);
  url.searchParams.set("append_to_response", "videos,credits,similar");
  url.searchParams.set("language", "en-US");

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${API_KEY}` },
    next: { revalidate: 60 * 10 },
  });
  if (!res.ok) throw new Error("Failed to fetch movie detail");
  return res.json();
}
