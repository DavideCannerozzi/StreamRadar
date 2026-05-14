import type { Result } from "../FileUploader/FileUploader.types";

export default function MovieCard({ result }: { result: Result }) {
  return (
    <tr className="border-b border-gray-200">
      <td className="text-sm font-medium py-4">{result.title}</td>
      <td className="text-sm font-medium py-4">{result.releaseDate}</td>
      <td className="py-4">
        <div className="flex gap-4 items-center">
          {result.platforms.length === 0 ? (
            <span className="text-sm text-gray-500">No streaming provider available</span>
          ) : (
            result.platforms.map((platform) => (
              <div key={platform.provider_id} className="flex items-center">
                {platform.logo_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original${platform.logo_path}`}
                    alt={`${platform.provider_name} logo`}
                    className="w-8 h-8 rounded-md object-contain"
                  />
                ) : (
                  <span className="text-sm text-gray-500">
                    {platform.provider_name}
                  </span>
                )}
              </div>
            ))
          )}
        </div>
      </td>
    </tr>
  );
}
