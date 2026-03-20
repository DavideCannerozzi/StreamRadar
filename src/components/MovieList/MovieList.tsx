import type { Result } from "../FileUploader/FileUploader.types";
import MovieCard from "../MovieCard/MovieCard";

interface MovieListProps {
  results: Result[];
}

export default function MovieList({ results }: MovieListProps) {
  return (
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
  );
}
