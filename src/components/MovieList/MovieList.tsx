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
          Upload your IMDB watchlist and click Search to find available films
        </p>
      ) : (
        <table className="table-auto border-red-400 w-full">
          <thead>
            <tr>
              <th className="text-left pb-8">Title</th>
              <th className="text-left pb-8">Year</th>
              <th className="text-left pb-8">Platform</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {results.map((result, i) => (
              <MovieCard key={i} result={result} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
