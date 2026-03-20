import type { Result } from "../FileUploader/FileUploader.types";
import MovieCard from "../MovieCard/MovieCard";

interface MovieListProps {
  results: Result[];
}

export default function MovieList({ results }: MovieListProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {results.map((result, i) => (
        <MovieCard key={i} result={result} />
      ))}
    </div>
  );
}
