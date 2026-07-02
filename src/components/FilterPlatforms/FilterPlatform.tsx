import type { Result } from "../FileUploader/FileUploader.types";

interface FilterPlatformProps {
  setValue: (value: string) => void;
  results: Result[];
}

export default function FilterPlatform({
  setValue,
  results,
}: FilterPlatformProps) {
  const platformsProviders = [
    ...new Set(
      results.flatMap((result) =>
        result.platforms.map((provider) => provider.provider_name),
      ),
    ),
  ].sort();

  return (
    <div className="flex-row items-center gap-4">
      <label htmlFor="platforms" className="text-sm font-medium text-gray-600">
        Filter By Platform:
      </label>
      <select
        name="platforms"
        id="platforms"
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">All platforms</option>
        {platformsProviders.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
}
