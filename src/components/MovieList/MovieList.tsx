import MovieCard from "../MovieCard/MovieCard";
import type { MovieListProps } from "./MovieList.types";

export default function MovieList({
  results,
  error,
  loading,
  counter,
  totalMovies,
  value,
}: MovieListProps) {
  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="w-10 h-10 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-400 italic ml-8">
          {counter} of {totalMovies} movies checked
        </span>
      </div>
    );
  }
  if (error) {
    return <p className="text-red-500 font-bold">{error}</p>;
  }
  if (results.length === 0) {
    return (
      <p className="text-gray-400">
        No streaming providers found yet. Upload your IMDb watchlist and click
        Search to check availability.
      </p>
    );
  }

  const filteredPlatforms =
    value === ""
      ? results
      : results.filter((result) =>
          result.platforms.some((p) => p.provider_name === value),
        );

  return (
    <div className="p-8">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-left p-8">Title</th>
            <th className="text-left p-8">Year</th>
            <th className="text-left p-8">Platform</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlatforms.map((result) => (
            <MovieCard key={result.Const} result={result} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
