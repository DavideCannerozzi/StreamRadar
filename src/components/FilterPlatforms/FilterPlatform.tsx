interface FilterPlatformProps {
  setValue: (value: string) => void;
}

export default function FilterPlatform({ setValue }: FilterPlatformProps) {
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
        <option value="Netflix">Netflix</option>
        <option value="Amazon Prime Video">Prime Video</option>
        <option value="Disney Plus">Disney +</option>
      </select>
    </div>
  );
}
