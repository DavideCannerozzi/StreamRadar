import type {
  Movies,
  Result,
} from "../components/FileUploader/FileUploader.types";

export const searchMovies = async (
  data: Movies[],
  setResults: (results: Result[]) => void,
  setLoading: (loading: boolean) => void,
  setCounter: React.Dispatch<React.SetStateAction<number>>,
) => {
  const found: Result[] = [];
  setLoading(true);
  const batchSize = 10;
  const totalMovies = data.length;

  for (let i = 0; i < totalMovies; i += batchSize) {
    const batchArray = data.slice(i, i + batchSize);
    await Promise.all(
      batchArray.map(async (film) => {
        try {
          const findResponse = await fetch(
            `https://api.themoviedb.org/3/find/${film.Const}?external_source=imdb_id&api_key=${import.meta.env.VITE_API_KEY}`,
          );
          if (!findResponse.ok) {
            throw new Error(`Tmdb request failed: ${findResponse.status}`);
          }
          const findData = await findResponse.json();
          const tmdbId = findData.movie_results[0]?.id;
          if (!tmdbId) return;

          const providerResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${tmdbId}/watch/providers?api_key=${import.meta.env.VITE_API_KEY}`,
          );
          if (!providerResponse.ok) {
            throw new Error(`Tmdb request failed: ${providerResponse.status}`);
          }
          const providerData = await providerResponse.json();
          const flatrate = providerData.results?.IT?.flatrate;
          if (!flatrate) return;

          found.push({
            Const: film.Const,
            title: film.Title,
            platforms: flatrate,
            releaseDate: findData.movie_results[0]?.release_date,
          });
        } catch (error) {
          console.error(error);
        } finally {
          setCounter((prev) => prev + 1);
        }
      }),
    );
  }

  setResults(found);
  setLoading(false);
};
