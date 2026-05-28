import type { Result } from "../FileUploader/FileUploader.types";
import MovieCard from "../MovieCard/MovieCard";

interface MovieListProps {
  results: Result[];
  error: string | null;
  loading: boolean;
  counter: number;
  totalMovies: number;
}

export default function MovieList({
  results,
  error,
  loading,
  counter,
  totalMovies,
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

  return (
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
          <MovieCard key={result.Const} result={result} />
        ))}
      </tbody>
    </table>
  );
}
