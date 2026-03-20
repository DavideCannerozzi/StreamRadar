import type { Result } from "../FileUploader/FileUploader.types";

export default function MovieCard({ result }: { result: Result }) {
  return (
    <tr className="border-b border-gray-200">
      <td className="text-sm font-medium py-4">{result.title}</td>
      <td className="text-sm font-medium py-4">{result.releaseDate}</td>
      <td className="py-4">
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
      </td>
    </tr>
  );
}
