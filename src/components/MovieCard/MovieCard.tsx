import type { Result } from "../FileUploader/FileUploader.types";

export default function MovieCard({ result }: { result: Result }) {
  return (
    <div className="flex items-center justify-center gap-4 border-b border-gray-200 pb-4">
      <span className="text-sm font-medium">{result.title}</span>
      <span className="text-sm font-medium">{result.releaseDate}</span>
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
  );
}
