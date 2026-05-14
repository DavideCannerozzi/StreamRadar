import type { Result } from "../FileUploader/FileUploader.types";
import MovieCard from "../MovieCard/MovieCard";

interface MovieListProps {
  results: Result[];
}

export default function MovieList({ results }: MovieListProps) {
  return (
    <>
      {results.length === 0 ? (
        <p className="text-gray-400">
          No streaming providers found yet. Upload your IMDb watchlist and click
          Search to check availability.
        </p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left pb-8">Title</th>
              <th className="text-left pb-8">Year</th>
              <th className="text-left pb-8">Platform</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <MovieCard key={result.imdbId} result={result} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
