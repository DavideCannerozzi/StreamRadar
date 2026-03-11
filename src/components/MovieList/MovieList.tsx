import type { Result } from "../FileUploader/FileUploader.types";

interface MovieListProps {
  results: Result[];
}

export default function MovieList({ results }: MovieListProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {results.map((result, i) => (
        <div
          key={i}
          className="flex items-center justify-center gap-4 border-b border-gray-200 pb-4"
        >
          <span className="text-sm font-medium">{result.title}</span>
          <span className="text-sm font-medium">{result.releaseDate}</span>
          <span></span>
          <div className="flex gap-8">
            {result.platforms.map((platform) => (
              <img
                key={platform.provider_id}
                src={`https://image.tmdb.org/t/p/original${platform.logo_path}`}
                alt={platform.provider_name}
                className="w-8 h-8 rounded-md"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
