import Papa from "papaparse";
import type { FileUploaderProps, Movies, Result } from "./FileUploader.types";

export default function FileUploader({
  setData,
  data,
  setResults,
}: FileUploaderProps) {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    Papa.parse<Movies>(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  const handleSearch = async () => {
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

  return (
    <div>
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={handleFile}
        className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-6 file:border file:border-black file:bg-white file:text-black file:text-sm file:font-medium hover:file:bg-black hover:file:text-white file:transition-colors file:duration-200 file:cursor-pointer"
      />
      <button
        onClick={handleSearch}
        className="bg-white text-black border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200"
      >
        Search
      </button>
    </div>
  );
}
