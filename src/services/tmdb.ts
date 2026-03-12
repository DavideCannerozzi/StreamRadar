import type {
  Movies,
  Result,
} from "../components/FileUploader/FileUploader.types";

export const searchMovies = async (
  data: Movies[],
  setResults: (results: Result[]) => void,
) => {
  const found: Result[] = [];

  await Promise.all(
    data.map(async (film) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/find/${film.Const}?external_source=imdb_id&api_key=${import.meta.env.VITE_API_KEY}`,
        );
        const d = await response.json();
        const tmdbId = d.movie_results[0]?.id;
        if (!tmdbId) return;

        const response2 = await fetch(
          `https://api.themoviedb.org/3/movie/${tmdbId}/watch/providers?api_key=${import.meta.env.VITE_API_KEY}`,
        );
        const d2 = await response2.json();
        const flatrate = d2.results?.IT?.flatrate;
        if (!flatrate) return;

        found.push({
          title: film.Title,
          platforms: flatrate,
          releaseDate: d.movie_results[0]?.release_date,
        });
      } catch (error) {
        console.error(error);
      }
    }),
  );
  setResults(found);
};
